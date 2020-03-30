
import createSetVisibilityFilter from './setVisibilityFilter'
import { mockVisibilityFilter } from '../../cache.spec'
import { VisibilityFilters } from '../../models/VisibilityFilter';

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


