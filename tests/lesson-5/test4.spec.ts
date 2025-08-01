import { test } from "@playwright/test"
import { title } from "process";
test("Personal notes", async ({ page }) => {
    const notes = [
        {
            title: "Quốc gia đầu tiên phải di cư vì biến đổi khí hậu",
            content: "Nghiên cứu mới dự đoán Tuvalu có thể bị chìm trong 25 năm tới do mực nước biển dâng cao, buộc nhà chức trách phải tiến hành kế hoạch di cư dân số đến Australia."
        },
        {
            title: "5 máy hút ẩm kiêm lọc khí cao cấp",
            content: 'Số bình chọn thứ hai của "Sản phẩm tôi yêu 2025" là cuộc đua của 5 máy hút ẩm kiêm lọc khí cao cấp, bán chính hãng với giá từ 5,8 triệu đồng.'
        },
        {
            title: 'Nền tảng tích hợp AI hỗ trợ y tế cho người dân miền núi',
            content: 'Hệ thống VNSmartHealth không cần kết nối mạng vẫn có thể hỗ trợ chẩn đoán bệnh, giúp người dân vùng sâu, vùng xa tiếp cận y tế kịp thời.'
        },
        {
            title: 'Đức sắp chuyển thêm bệ phóng Patriot cho Ukraine',
            content: 'Đức thông báo sẽ chuyển bệ phóng của hai tổ hợp Patriot cho Ukraine trong vài ngày tới, sau đó là các bộ phận còn lại của hệ thống.'
        },
        {
            title: 'Đức sắp chuyển thêm bệ phóng Patriot cho Ukraine',
            content: 'Đức thông báo sẽ chuyển bệ phóng của hai tổ hợp Patriot cho Ukraine trong vài ngày tới, sau đó là các bộ phận còn lại của hệ thống.'
        },
        {
            title: 'Đức sắp chuyển thêm bệ phóng Patriot cho Ukraine',
            content: 'Đức thông báo sẽ chuyển bệ phóng của hai tổ hợp Patriot cho Ukraine trong vài ngày tới, sau đó là các bộ phận còn lại của hệ thống.'
        },
        {
            title: 'Đức sắp chuyển thêm bệ phóng Patriot cho Ukraine',
            content: 'Đức thông báo sẽ chuyển bệ phóng của hai tổ hợp Patriot cho Ukraine trong vài ngày tới, sau đó là các bộ phận còn lại của hệ thống.'
        },
        {
            title: 'Đức sắp chuyển thêm bệ phóng Patriot cho Ukraine',
            content: 'Đức thông báo sẽ chuyển bệ phóng của hai tổ hợp Patriot cho Ukraine trong vài ngày tới, sau đó là các bộ phận còn lại của hệ thống.'
        },
        {
            title: 'Đức sắp chuyển thêm bệ phóng Patriot cho Ukraine',
            content: 'Đức thông báo sẽ chuyển bệ phóng của hai tổ hợp Patriot cho Ukraine trong vài ngày tới, sau đó là các bộ phận còn lại của hệ thống.'
        },
        {
            title: 'Đức sắp chuyển thêm bệ phóng Patriot cho Ukraine',
            content: 'Đức thông báo sẽ chuyển bệ phóng của hai tổ hợp Patriot cho Ukraine trong vài ngày tới, sau đó là các bộ phận còn lại của hệ thống.'
        },        
    ]
    await page.goto("https://material.playwrightvn.com/");
    await page.locator('//a[contains(text(),"Bài học 4: Personal notes")]').click();
    await test.step("fill form and submit", async () => {
        for (const note of notes) {
            await page.locator("#note-title").pressSequentially(`${note.title}`, { delay: 0.1 });
            await page.locator("//textarea[@id='note-content']").fill(`${note.content}`);
            await page.locator("//button[contains(text(),'Add Note')]").click();
        }
        const keySearch = notes[1].title;
        await page.locator('#search').fill(`${keySearch}`)
    })
});