
import createSetVisibilityFilter from './setVisibilityFilter'
import { VisibilityFilters } from '../../../models/VisibilityFilter';
import { mockVisibilityFilter } from '../../../tests/mocks/mockVisibilityFilter';

const setVisibilityFilter = createSetVisibilityFilter(mockVisibilityFilter);

describe('setVisibilityFilter hook', () => {
  beforeEach(() => mockVisibilityFilter(VisibilityFilters.SHOW_ALL));
  
  it('should change the visibility filter', () => {
    setVisibilityFilter(VisibilityFilters.SHOW_ALL);

    expect(
      mockVisibilityFilter().displayName
    ).toEqual("All")

    setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED);
 
    expect(
      mockVisibilityFilter().displayName
    ).toEqual("Completed")
  });
})


