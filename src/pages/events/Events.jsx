import { useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import { TbListTree } from 'react-icons/tb';
import { useSearchParams } from 'react-router';

function Events() {
  const [params, setParams] = useSearchParams();

  const [btnFilter, setBtnFilter] = useState(false);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState(params.get('search') || null);
  const [location, setLocation] = useState(params.get('city') || null);
  const [category, setCategory] = useState(params.get('category') || null);
  const [sorted, setSorted] = useState(params.get('sorted') || null);

  function setQueryParams(key, value) {
    setParams((prevQuery) => {
      if (value) {
        prevQuery.set(key, value);
      } else {
        prevQuery.delete(key);
      }
      return prevQuery;
    });
  }

  return (
    <main className="flex flex-col items-center">
      <section className="w-full flex justify-center border-b p-16 border-border-header sticky top-67 bg-white z-5">
        <form className="flex items-center max-w-7xl w-full gap-12">
          <div className="flex w-full items-center py-10 px-12 gap-8 rounded-lg bg-thirty">
            <LuSearch className="text-font-secondary" />
            <input
              onChange={(e) => {
                setQueryParams('search', e.target.value);
                setSearch(e.target.value);
              }}
              className="f-14 pl-3 flex flex-wrap w-full outline-none"
              defaultValue={params.get('search')}
              type="text"
              placeholder="Search events..."
            />
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              setBtnFilter(!btnFilter);
            }}
            className="f-14 md:f-16 border border-border-header font-medium text-light p-6 px-16 py-8 rounded-lg flex items-center gap-6 cursor-pointer"
          >
            <TbListTree className="text-font-primary" />
            <span className="text-font-primary f-14 hidden md:flex">
              Filters
            </span>
          </div>
        </form>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 max-w-7xl gap-16 p-16">
        <div className="col-span-1 md:col-span-3">
          <div className="flex items-center gap-5">
            <span className="font-bold f-14 text-dark">{total}</span>
            <span className="f-14 text-dark-primary">events found</span>
          </div>
        </div>

        {btnFilter && (
          <div className="col-span-1 md:col-span-3">
            {/* Category */}
            <div>
              <span className="text-xs font-semibold text-font-forthy">
                CATEGORY
              </span>
              <div className="flex flex-nowrap overflow-x-auto scrollbar-none gap-8 py-4 [&_span]:text-xs [&_span]:px-12 [&_span]:py-6 [&_span]:round-8 [&_span]:border [&_span]:border-border-header">
                <span
                  className={`${(!category || category === 'all') && 'bg-primary text-light'} cursor-pointer`}
                  onClick={() => {
                    setQueryParams('category', 'all');
                    setCategory(null);
                  }}
                >
                  All
                </span>
                {/* {categorys?.data?.map((res) => {
                  return (
                    <span
                      key={res.id}
                      onClick={() => {
                        setCategory(res.id);
                        setQueryParams('category', res.id);
                      }}
                      className={`${category === res.id && 'bg-primary text-light'} cursor-pointer`}
                    >
                      {res.title}
                    </span>
                  );
                })} */}
              </div>
            </div>

            <div className="grid grid-cols-[60%_40%] gap-24">
              {/* Location */}
              <div className="pt-10 flex-2/5 min-w-0">
                <span className="text-xs font-semibold text-font-forthy">
                  LOCATION
                </span>
                <div
                  className="flex flex-nowrap overflow-x-auto scrollbar-none gap-8 py-4 
              [&_span]:whitespace-nowrap [&_span]:text-xs [&_span]:px-12 [&_span]:py-6 [&_span]:round-8 [&_span]:border [&_span]:border-border-header"
                >
                  <span
                    className={`${(!location || location === 'all') && 'bg-primary text-light'} cursor-pointer`}
                    onClick={() => {
                      setQueryParams('city', 'all');
                      setLocation(null);
                    }}
                  >
                    All Locations
                  </span>
                  {/* {allLocation.map((res, idx) => {
                    return (
                      <span
                        className={`${location === res && 'bg-primary text-light'} cursor-pointer`}
                        key={idx}
                        onClick={() => {
                          setLocation(res);
                          setQueryParams('city', res);
                        }}
                      >
                        {res}
                      </span>
                    );
                  })} */}
                </div>
              </div>
              {/* Sort By */}
              <div className="pt-10 flex-1 min-w-0 pr-16">
                <span className="text-xs font-semibold text-font-forthy">
                  SORT BY
                </span>
                <div
                  className="flex flex-nowrap overflow-x-auto scrollbar-none gap-8 py-4 
              [&_span]:whitespace-nowrap [&_span]:text-xs [&_span]:px-12 [&_span]:py-6 [&_span]:round-8 [&_span]:border [&_span]:border-border-header"
                >
                  {[
                    'All Category',
                    'Upcomming',
                    'Most Popular',
                    'Almost Full',
                    'Recently Added',
                  ].map((res, idx) => {
                    return (
                      <span
                        onClick={() => {
                          setSorted(res);
                          setQueryParams('by', res);
                        }}
                        key={idx}
                        className={`${sorted === res && 'bg-primary text-light'} cursor-pointer`}
                      >
                        {res}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <CardEvents
          category={category}
          search={search}
          location={location}
          sorted={sorted}
          total={setTotal}
        /> */}
      </section>

      <div className="pt-20 w-full justify-center flex">
        <span className="border border-border-header py-8 px-16 f-14 font-medium text-font-fivethy round-8">
          Load more events
        </span>
      </div>
    </main>
  );
}

export default Events;
