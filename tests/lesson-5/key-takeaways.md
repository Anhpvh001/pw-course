# lesson 5
## 1. Function advance
- Lambda function (Arrow function)
    - **Cú pháp**
    ```js
    (parameter) => {
        // Code here
    }
    ```
- Anonymous function
    - **Cú pháp**
    ```js
    function(parameter) {
        // code here
    }
    ```

## 2. Dom (Document Object Model)
- **Node**
    - Ví dụ
    ```js 
    <option>US</option>
    <img src="image.jpg" alt="Image description"/> // thẻ tự đóng 
    ```
-  **Các thẻ  html thường gặp**
    ```js
    <div> : chia các khối trong web
    <h1></h1> đến <h6></h6>: Tạo header từ to xuống nhỏ 
    <form></form>: chứa form thông tin
    input, textarea: chứa input điền vào textarea thì dạng to hơn
    radio: tạo nút chọn 1 radio
    checkbook: nút có thể tích nhiều checkbook 1 lúc hoặc không tích 
    list, drop down: show thông tin list hoặc thả xuống 
    button: tạo nút bấm
    table: hiển thị bảng dữ liệu
        - thead
            - tr: hàng
            - th: cột
        - tbody
            - tr: hàng
            - td: cột
    date picker: thẻ chọn ngày
    slider: thẻ thanh trượt
    iframe: hiển thị nội dung trang khác từ trang hiện tại
    ```

## 3. Selector
- Có nhiều kiểu (bài này học Xpart selector)
    - Xpart selector 
    - CSS selector 
    - Playwright selector
- Xpart selector
    - Tuyệt đối: bắt đầu bằng `/` đi dọc theo dom cây từ trên xuống
    - Tương đối (nên dùng): bắt đầu bằng `//` vd: //tenthe[@thuoctinh=”gia
tri”]

## 4. Playwright basic syntax
- Test: Đơn vị để khai báo 1 test
```js
import {test} from "@playwright/test"
test("tên test", async({page}) => {
    //code here
});
```
- Step: đơn vị nhỏ hơn test để khai báo từng bước của test
```js
await test.step('tên step', async() =>{
    // code here
});
```
- Basic action: 
    - Navigate
    ```js
    await page.goto("link");
    ```
    - Click 
    ```js
    await page.locator("selector").click();
    await page.locator("selector").dbclick(); //double click
    await page.locator("selector").click({
        button : 'right'
    }); // click chuột phải
    await page.locator("selector").click({
        modifiers : ['Shift'],
    }); // bấm chuột vs phím shift
    ```

    - Input
    ```js
    await page.locator("selector").fill('text');
    await page.locator("selector").pressSequentially('text', {
        delay(100)
    });
    ```
    - Radio button/checkbook
    ```js
    const isChecked =
    page.locator("//input").isChecked(); // ktra xem có check hay ko
    page.locator("//input").check(); // set true
    page.locator("//input").setChecked(false); // set check book false
    ```
    - set inputFile vs select option 
    ```js
    await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-5/profile-picture.txt");

    await page.locator("//select[@id='country']").selectOption("Canada"); 
    ```
