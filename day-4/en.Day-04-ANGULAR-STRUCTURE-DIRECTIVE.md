# 100 Days of Code Angular Day 4
![Background for day 4][bg-url]
## ANGULAR STRUCTURE DIRECTIVE
In programming, we need to depend on conditions to make the corresponding decision. Assume that we're developing the online video-watching application, which requires the user must be older than 13 years old to watch them. Well, How to help the users know how to they are egliable to watch them? In case that we can now use the IF_ELSE that Angular provides to meet those requirements. 

With Angular application, if you want to update or change the structure (etc. structure HTML) in view's component, we'll use **Structure Directive**.

### IF-ELSE STRUCTURE
To display partial's view with a condition, we'll put on the tag with a property, which contains * (_asterisk_) such as `*ngIf="expression"`:

```ts
@Component({
selector: 'app-hello',
template: `
    <h2>Hello there!</h2>
    <h3>Your name: {{ user.name }}</h3>
    <p>Your name: {{ user.age }}</p>
    <div *ngIf="user.age >= 13">
    You are egliable to watch the content of PG-13
    </div>
`
})
    
export class HelloComponent {
    user= {
        name: 'Tam Huynh',
        age: 22
    };
}
```
Ok, we now can display view depending on the data with the value that the expression returns. Displays if **Truthy**, **Falsy** doesn't.

With the Angular's built-in directive, the component's HTML template is very flexible.

So what if we want to use **IF-ELSE**. How we do it? Maybe you'll think about the negative statement of the IF statement? Right, it's ultimately.

```angular2html
<div *ngIf="user.age >= 13">
    You are egliable to watch the content of PG-13
</div>
<div *ngIf="user.age < 13">
    You are NOT egliable to watch the content of PG-13
</div>
```
On the other hand, we have another good way, which is to use **ng-template**. **ng-template** tag is a tag provided by Angular, and it contains the template defined within its opening/closing tag. What's defined template within it won't be shown to view, but we can use the template to render by code. The equivalent converting code is:
 
```angular2html
<div *ngIf="user.age >= 13; else noPG13">
    You are egliable to watch the content of PG-13
</div>
<ng-template #noPG13>
    <div>
        You are NOT egliable to watch the content of PG-13
    </div>
</ng-template>
```
### NG-TEMPLATE
With the syntax that uses with * (_asterisk_), you feel probably confused but in fact, it is called **Syntactic sugar** (    help you be easier to read more and more easily). You can convert it to property binding such as:

```angular2html
<ng-template [ngIf]="user.age >= 13" [ngIfElse]="noPG13">
    <div>
        You are egliable to watch the content of PG-13
    </div>
</ng-template>
```
## SUMMARY
On day 4, we need to understand how to use the structure of ngIf-else. In addition to the above ways, Angular also provides the way to use **ngIf - then - else**, you can learn more at the below links.

Link document for day 4
- https://angular.io/guide/structural-directives
- https://angular.io/api/common/NgIf

### The content of day 5 will be ngForOf loop.

## Contributing

1. Fork it (<https://github.com/tamht298/100DaysOfCodeAngular/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -m 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

**If you can, please translate docs with your native language.  Thanks for your great contributing**

HASHTAG

***`#100DaysOfCodeAngular`*** ***`#100DaysOfCode`*** ***`#AngularVietNam100DoC_Day4`***

Link reference post: [here][post-url]

@Copyright by [Tiep Phan](https://www.facebook.com/pttiep)
<!-- Markdown link & img dfn's -->
[post-url]: https://www.facebook.com/groups/AngularVietnam/permalink/892213474610838/
[bg-url]: https://github.com/tamht298/100DaysOfCodeAngular/blob/d-4/day-4/day-04.png

