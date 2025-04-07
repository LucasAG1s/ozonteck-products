import { CATEGORY_ROUTES } from '@/constants/categories';

export default function CategorySelect({ onChange }: { onChange: (category: string) => void }) {
  return (
    <select 
      onChange={(e) => onChange(e.target.value)}
      className="border rounded p-2"
    >
      <option value="">Todas as categorias</option>
      {CATEGORY_ROUTES.map((category) => (
        <option key={category.slug} value={category.name}>
          {category.name}
        </option>
      ))}
    </select>
  );
}