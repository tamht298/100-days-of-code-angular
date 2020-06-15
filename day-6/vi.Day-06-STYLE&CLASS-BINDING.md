# 100 Days of Code Angular Day 6
![Background for day 5][bg-url]
## ATTRIBUTE DIRECTIVE
Attribute directive là gì, nó có khác gì Structure directive mà chúng ta đã gặp qua như NgIf, NgForOf không?

Đối với Structure directive, nó có thể thêm, xóa, thay đổi cấu trúc cây DOM. Còn một Attribute directive sẽ có thể thay đổi cách hiển thị (style) hoặc hành vi của một DOM element/Component/Directive khác. Đấy chính là sự khác biệt giữa chúng.

### CLASS BINDING
Trong các ứng dụng thực tế, có thể chúng ta cần thay đổi (thêm, xóa) một số class tùy thuộc vào một số điều kiện nào đó.

Ví dụ, nếu chúng ta đang chọn một tab nào đó để hiển thị, thì tab đó sẽ có thêm class _tab-active_, các tab khác sẽ không có. Lúc này chúng ta sẽ sử dụng cú pháp:
```html
<div [class.tab-active]="isTabActive">
    some content
</div>
```

Nhìn qua thì nó chỉ là _property binding_, với giá trị của isTabActive trả về true thì classList của div đó sẽ tồn tại class tab-active, còn nếu trả về false thì sẽ không tồn tại.

Ngoài cú pháp trên chúng ta có thể dùng:
```html
[class]="classExpr"
```

Với classExpr có thể là string, array string hoặc object – nếu key nào của object là truthy thì sẽ thêm vào, nếu falsy thì sẽ xóa đi.

Ví dụ các dạng của classExpr:
- String: "my-class-1 my-class-2 my-class-3"
- Array String: ['foo', 'bar']
- Object: {foo: true, bar: false}

Tương tự với class binding chúng ta có thể sử dụng **ngClass**, nhưng hiện tại cũng có thể nói rằng **ngClass** không có gì khác biệt với [class]=”classExpr”. Và cách sử dụng Class Binding vẫn được khuyến cao sử dụng hơn ngClass

### STYLE BINDING
Có thể khi cần thiết, chúng ta cần binding cho style property (inline style), lúc này chúng ta có thể sử dụng **Style binding**.

Cấu trúc của style binding như sau:
```html
[style.property]=”expression”
```
Với expression sẽ tính toán về các giá trị kiểu string | undefined | null

Ví dụ:
```html
<div [style.width]=”someValue”></div>
```
Tiếp theo là cú pháp kèm theo unit:
```html
[style.property.unit]=”expression”
```
Với expression sẽ tính toán về các giá trị kiểu number | undefined | null

Ví dụ:
```html
[style.height.%]=”containerHeight”
```
Cuối cùng là cú pháp dạng:

```html
[style]=”styleExpr”
```
Với styleExpr là một trong các dạng:
- String: "width: 100%; height: 100%"
- Array String: ['width', '100px']
- Object: {[key: string]: string | undefined | null} như {width: '100px', height: '100px'}

Có một directive tương tự là ngStyle với cách dùng gấn giống thế, trong hầu hết các trường hợp, chúng ta được khuyến cáo sử dụng style binding thay thế.

Lưu ý rằng, một style property có thể dùng cả kiểu dash-key hoặc camelCase, ví dụ font-size hoặc fontSize đều được.

## SUMMARY
Như vậy trong Day 6, chúng ta cần tìm hiểu được cách dùng của 2 built-in attribute directive là class và style để có thể style được một phần tử tùy theo một dữ liệu nào đó trong component.

Dưới đây là các link document mà các bạn cần tìm hiểu:
- https://angular.io/guide/template-syntax#attribute-class-and-style-bindings
- https://angular.io/api/common/NgClass
- https://angular.io/api/common/NgStyle
- https://www.tiepphan.com/thu-nghiem-voi-angular-2-built-in-directives-ngstyle-ngclass/

**Mục tiêu Day 7 sẽ là Input cho component.**


## Contributing

1. Fork it (<https://github.com/tamht298/100DaysOfCodeAngular/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -m 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

HASHTAG

***`#100DaysOfCodeAngular`*** ***`#100DaysOfCode`*** ***`#AngularVietNam100DoC_Day6`***

Link reference post: [here][post-url]

@Copyright by [Tiep Phan](https://www.facebook.com/pttiep)
<!-- Markdown link & img dfn's -->
[post-url]: https://www.facebook.com/groups/AngularVietnam/permalink/893836944448491/
[bg-url]: https://github.com/tamht298/100DaysOfCodeAngular/blob/d-6/day-6/day-06.png
