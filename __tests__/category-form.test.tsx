import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CategoryForm from '@/components/category-form';
import { fetchCategories, fetchProperties, fetchOptionChildren } from '@/lib/api';

// Mock the API functions
jest.mock('@/lib/api', () => ({
  fetchCategories: jest.fn(),
  fetchProperties: jest.fn(),
  fetchOptionChildren: jest.fn(),
}));

describe('CategoryForm', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  test('loads and displays main categories on mount', async () => {
    const mockCategories = [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
    ];

    (fetchCategories as jest.Mock).mockResolvedValue(mockCategories);

    render(<CategoryForm />);

    await waitFor(() => {
      expect(fetchCategories).toHaveBeenCalled();
    });

    expect(screen.getByText('Select main category')).toBeInTheDocument();
  });

  test('loads subcategories when main category is selected', async () => {
    const mockCategories = [
      {
        id: 1,
        name: 'Category 1',
        children: [
          { id: 11, name: 'Subcategory 1' },
          { id: 12, name: 'Subcategory 2' },
        ],
      },
    ];

    (fetchCategories as jest.Mock).mockResolvedValue(mockCategories);

    render(<CategoryForm />);

    await waitFor(() => {
      expect(fetchCategories).toHaveBeenCalled();
    });

    const mainCategorySelect = screen.getByText('Select main category');
    fireEvent.click(mainCategorySelect);
    fireEvent.click(screen.getByText('Category 1'));

    await waitFor(() => {
      expect(screen.getByText('Select sub category')).toBeInTheDocument();
    });
  });

  test('displays properties when subcategory is selected', async () => {
    const mockProperties = [
      {
        id: 1,
        name: 'Property 1',
        options: [
          { id: 1, name: 'Option 1' },
          { id: 2, name: 'Option 2' },
        ],
      },
    ];

    (fetchCategories as jest.Mock).mockResolvedValue([
      {
        id: 1,
        name: 'Category 1',
        children: [{ id: 11, name: 'Subcategory 1' }],
      },
    ]);
    (fetchProperties as jest.Mock).mockResolvedValue(mockProperties);

    render(<CategoryForm />);

    // Select main category
    await waitFor(() => {
      fireEvent.click(screen.getByText('Select main category'));
    });
    fireEvent.click(screen.getByText('Category 1'));

    // Select subcategory
    await waitFor(() => {
      fireEvent.click(screen.getByText('Select sub category'));
    });
    fireEvent.click(screen.getByText('Subcategory 1'));

    await waitFor(() => {
      expect(fetchProperties).toHaveBeenCalledWith(11);
      expect(screen.getByText('Select Property 1')).toBeInTheDocument();
    });
  });
});