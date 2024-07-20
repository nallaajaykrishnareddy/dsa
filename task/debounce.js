function debounce(searchFn, delay = 500) {
  let id;
  return function optimizedFn(...args) {
    clearTimeout(id);
    id = setTimeout(() => {
      searchFn(...args);
    }, delay);
  };
}

function printData(data) {
  console.log(data);
}

const fn = debounce(printData, 1000);

fn("i");
fn("iP");
fn("iPh");
fn("iPhon");
fn("iPhone");
