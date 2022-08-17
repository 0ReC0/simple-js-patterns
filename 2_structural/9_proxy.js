function networkFetch(url) {
  return `${ url } - Server Response`
}

const cache = new Set();
const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, argArray) {
    const url = argArray[0];

    if (cache.has(url)) {
      return `${ url } - Cached Server Response`;
    } else {
      cache.add(url);
      return Reflect.apply(target, thisArg, argArray);
    }
  }
});
console.log(proxiedFetch('yandex.ru'));
console.log(proxiedFetch('google.com'));
console.log(proxiedFetch('yandex.ru'));
