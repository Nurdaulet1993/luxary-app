export default class Service {
    _apiBase = 'https://cors-anywhere.herokuapp.com/http://luxary-trend.com/public/api/goods';

    getGoods = async (url) => {
        const res = await fetch(`${this._apiBase}/${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}`);
        }

        return await res.json();
    }
}