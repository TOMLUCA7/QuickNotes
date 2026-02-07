import MyButton from '../MyButton/MyButton';
import './FilterBar.css';

const FilterBar = ({ selectedCategory, setSelectedCategory, categories }) => {
  const allCategories = [{ name: 'All' }, ...categories];

  return (
    <div className="filter-bar-container">
      {allCategories.map((category) => (
        <MyButton
          key={category.name}
          label={category.name}
          onClick={() => setSelectedCategory(category.name)}
          className={`filter-button ${selectedCategory === category.name ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default FilterBar;
