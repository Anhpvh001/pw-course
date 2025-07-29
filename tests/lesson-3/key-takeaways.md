# Lesson 3
## Git 
- undo things
    - change commit message: git commit --amend "message" 
    - đưa vùng stagging -> working directory: git restore --staged <file>
    - đưa commit gần nhất từ repo -> working directory: git reset HEAD~1

- branch model
    - tạo nhánh: git branch <tên_nhánh>
    - tạo nhánh và chuyển sang nhánh đó luôn: git checkout -b <tên_nhánh>
    - tạo thêm nhánh nhưng vẫn ở nhánh ban đầu: git checkout <tên_nhánh>
    
- file .gitignore
    - thêm vào đó những file hoặc foder mà ko muốn dùng thêm vào repo 

## Javascript
- Conventions:
    - snake_case : chưa dùng
    - kebab-case : tên file
    - camelCase : tên biến
    - PascalCase : tên class
- console.log dùng blacktisk
- khai báo object
- sử dụng , gán lại giá trị
- logical operator : !, || , &&
- array
    - tạo mảng, khai báo, sử dụng
    - truy xuất: tìm phần tử theo index, độ dài mảng.
- function
    - khai báo
    - return
    - parameter
