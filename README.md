https://react-omdb-api-movie-app.vercel.app/

用 React 和 Bootstrap 寫了一個查詢電影的網站

用 CSS 寫了簡單的動畫，用flexbox 做了一個可左右拉動的Swiper

利用 fetch 函式串接 OMDb API 的資料庫， 可在搜索框中動態搜尋電影， 也可把查詢的電影加到我的最愛，用 localStorage 紀錄我的最愛的電影將其儲存至瀏覽器裡

新增電影到favourite時會觸發isSame函數來判斷是否已經存在相同的電影，觸發不同的通知訊息，此訊息是直接套用Bootstrap上提供的組件，若加入存在相同的電影時則會在右下角顯示其電影已存在於favourite list裡，沒有相同的則顯示加入成功

點選movie會依照動態路由跳轉到該電影其IMDB的網站介紹頁面
