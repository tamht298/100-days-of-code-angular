# 100 Days of Code Angular
![Background for day 1][bg-url]
## GIỚI THIỆU

Trong vài năm trở lại đây, Angular đã có nhiều cải tiến mới, cả về **feature** và **performance**. Càng ngày càng có nhiều công ty/tổ chức, dự án sử dụng Angular để phát triển các sản phẩm giàu tính tương tác. Mình nhận thấy đây là thời điểm thích hợp để khởi động một series để các bạn có động lực học code Angular, do đó series **100 Days of Code Angular** đã ra đời.
Mục tiêu của series là mang đến cơ hội để thử thách bản thân các bạn trong một quá trình liên tục, với mong muốn sau khi kết thúc 100 ngày thì các bạn có kiến thức nền tảng để phát triển dự án bằng Angular.
### CHUẨN BỊ
Để chuẩn bị cho chặng đường phía trước, chúng ta cần một số thứ như sau:
- *IDE/Editor*: các bạn có thể dùng những công cụ mà các bạn thấy quen thuộc, hoặc sử dụng một số công cụ như [Visual Studio Code (VS Code)][vscode-url], [WebStorm][webstorm-url] để support code tốt hơn.
- Nếu bạn sử dụng *VS Code* thì nên cài đặt thêm 1 số extension để support trong quá trình code như: [Angular Language Service][angular-language-service-url], [EditorConfig for VS Code][editorconfig-url], [ESLint][eslint-url]/[TSLint][tslint-url], [Nx Console (optional)][nxconsole-url]
### TIẾN HÀNH
> **NODEJS**

Đầu tiên các bạn vào trang [Nodejs](https://nodejs.org/en/download/) để tải về Nodejs và cài đặt vào máy. Các bạn có thể tải về bản **Long Term Support (LTS)** hoặc **Current** đều được. Hiện tại bản **LTS** mới nhất là **version 12**, với **Angular version 9** thì đã hoàn toàn phù hợp rồi.
Đối với các bạn nào quen thuộc với **terminal** thì mình khuyến cáo sử dụng **NVM** để **cài đặt và quản lý nhiều phiên bản Nodejs** trên cùng 1 máy. Như thế các bạn sẽ linh động khi làm việc với nhiều dự án khác nhau, có đòi hỏi khác nhau về **version của Nodejs**.
Sau khi cài đặt thành công các bạn có thể verify lại bằng cách mở **Terminal/PowerShell/CMD** (mình sẽ gọi chung là Terminal) và gõ các lệnh sau, nếu nó hiển thị ra được version thì đã cài đặt thành công.
```shell script
node -v
npm -v
```
> **ANGULAR CLI**

Để phát triển một dự án Angular, chúng ta sẽ sử dụng đến công cụ chính thức từ team Angular đó là Angular CLI, (nó là một tool chạy các lệnh từ Terminal), và chúng ta sẽ cài đặt thông qua NPM bằng câu lệnh sau:
`npm install -g @angular/cli@latest`

Sau khi cài đặt thành công các bạn có thể verify bằng lệnh:
`ng version`

Ở thời điểm hiện tại Angular CLI đang là version 9.
Lưu ý:
- Một số bạn sử dụng Windows có thể phải cài đặt thêm Python hoặc windows-build-tools để có thể sử dụng SCSS ở trong project sắp tới.
- Nếu các bạn không thể chạy `ng version` vì nó báo ` 'ng' is not recognized as an internal or external command.` thì các bạn cần phải thêm npm global vào PATH.
- Một số bạn sử dụng PowerShell có thể bị báo ``` File C:\Users\< username >\AppData\Roaming\npm\ng.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.``` thì các bạn cần phải enable policy để chạy được command. Để enable các bạn mở Powershell as Administrator và chạy lệnh này `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine` hoặc mở link ở thông báo lỗi để tìm hiểu thêm.
### KHỞI TẠO DỰ ÁN
Sau khi mọi thứ đã xong xuôi thì bạn có thể khởi tạo dự án được rồi. Bạn mở Terminal và chạy lệnh:
`ng new <tên-project>`

Ví dụ:
`ng new angular100-d-o-c`

Lúc này các bạn sẽ cần trả lời 1 số câu hỏi về routing, style như sau:

**_- Would you like to add Angular routing?_**

**_- Which stylesheet format would you like to use?_**

Cơ bản thì các bạn có thể để default cũng được, hoặc chọn tùy thích như (**Y** cho routing, **SCSS** cho style) như mình đang dùng cho các project thực tế thì hầu hết sẽ chọn như trên.
Sau khi khởi tạo xong, chúng ta có thể mở dự án ở Editor quen thuộc (ví dụ: VS Code) để xem project đã được generate ra.
Để khởi chạy dự án, chúng ta chạy lệnh sau ở trong directory của dự án.

`ng serve`

Mặc định dự án sẽ chạy ở port 4200, nếu bạn muốn đổi port thì chỉ cần thêm tham số

`ng serve --port=other-port`

Ví dụ:
`ng serve --port=9000`

Sau khi serve thành công các bạn có thể mở trình duyệt và navigate vào địa chỉ URL: http://localhost:4200/ ở đây các bạn sẽ thấy được thành quả của mình.

> Như vậy, chúng ta đã hoàn thành ngày đầu tiên tìm hiểu Angular. Hẹn gặp lại trong các ngày tiếp theo.
## Contributing

1. Fork it (<https://github.com/tamht298/100DaysOfCodeAngular/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -m 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

***`#100DaysOfCodeAngular`*** ***`#100DaysOfCode`***

# Link tham khảo
- https://angular.io/guide/setup-local

- https://angular.io/tutorial/toh-pt0

Link reference post: [here](https://facebook.com/groups/AngularVietnam/permalink/889856741513178/)

@Copyright by [Tiep Phan](https://www.facebook.com/pttiep)
<!-- Markdown link & img dfn's -->
[post-url]: https://www.facebook.com/groups/AngularVietnam/permalink/889856741513178
[vscode-url]: https://code.visualstudio.com
[webstorm-url]: https://www.jetbrains.com/webstorm/
[angular-language-service-url]: https://marketplace.visualstudio.com/items?itemName=Angular.ng-template
[editorconfig-url]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[tslint-url]: https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin
[eslint-url]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[nxconsole-url]: https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console
[group-fb-url]: https://www.facebook.com/groups/AngularVietnam
[bg-url]: https://github.com/tamht298/100DaysOfCodeAngular/blob/d-1/day-1/bg-day01.png

