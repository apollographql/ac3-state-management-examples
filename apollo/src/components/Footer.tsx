import React from 'react'
import PropTypes from 'prop-types'
import FilterLink from '../containers/FilterLink'
import { VisiblityFilter, VisibilityFilters } from '../cache'

interface FooterProps {
  activeVisibilityFilter: VisiblityFilter;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
  setVisibilityFilter: (filter: VisiblityFilter) => void;
}

const Footer = (props: FooterProps) => {
  const { activeCount, completedCount, onClearCompleted, activeVisibilityFilter, setVisibilityFilter } = props;
  const itemWord = activeCount === 1 ? "item" : "items";
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount || "No"}</strong> {itemWord} left
      </span>
      <ul className="filters">
        {Object.keys(VisibilityFilters).map((key) => VisibilityFilters[key]).map((filter) => (
          <li key={filter.id}>
            <FilterLink 
              active={activeVisibilityFilter.id === filter.id} 
              setFilter={() => setVisibilityFilter(filter)}>
                {filter.displayName}</FilterLink>
          </li>
        ))}
      </ul>
      {!!completedCount && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired
}

export default Footer
