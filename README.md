Trong TypeScript chia ra làm 7 loại cơ bản, bao gồm: boolean, number, string, array, enum, any, void. khi khai báo ta sẽ sử dụng cấu trúc như sau: var tên_biến : kiểu_trả_về = giá_trị_biến;

Boolean: Kiểu dữ liệu cơ bản nhất là giá trị true/false đơn giản, mà JavaScript và TypeScript gọi là giá trị.boolean

var isDone: boolean = true;
String:

var name: boolean = "nguyen thi A";
Number:

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
Array : có 2 kiểu khai báo tương đương với nhau trong TypeScript

1: var list: boolean[] = [true, false];
2: var isDone: Array<boolean> = [true, false];
Tuple: cho phép mảng chứa các phần tử có các kiểu dữ liệu khác nhau.

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
Enum: khi khai báo enum một cách thông thường các phần tử sẽ được đánh số từ 0 và tăng dần

enum Color{
	Red, 
	Green, 
	Blue
};
var c: Color = Color.Green
var colorName = Color[1] // kết quả sẽ là Green
Khi muốn phần tử đầu tiên là 1 chứ không phải là 0 như mặc định thì cần khai báo như sau:

enum Color{
	Red = 1, 
	Green, 
	Blue
};
var c: Color = Color.Green
var colorName = Color[1] // kết quả sẽ là Red
enum Color {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color[2];
 
// Displays 'Green'
console.log(colorName);
Any: anylà một kiểu mà bạn có thể gán bất kỳ kiểu nào cho nó. Khi bạn không khai báo kiểu dữ liệu cho một biến, và TS không thể tự đoán được, nó sẽ tự gán kiểu dữ liệu any.

Bạn có thể thấy xài any giống như không xài TS vậy, nên mọi người thường KHÔNG khuyến khích sử dụng nó. Tuy nhiên nếu bạn đang bắt đầu tích hợp TS vào một dự án JS cũ thì any có thể sẽ hữu ích.

var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // khai báo này hoàn toàn được chấp nhận. 
                 // nếu notSure ban đầu khai báo và number thì
                 // tại đây chắc chắn sẽ có lỗi

var list:any[] = [1, true, "free"]; // nếu sử dụng var list:number[] thì
                                    // tất cả các phần tử trong list sẽ phải là kiểu number
list[1] = 100;
Unknow: Kiểu này khi bạn muốn mô tả một dữ liệu mà chưa biết được trước kiểu dữ liệu của nó.

let notSure: unknown = 4;
notSure = "maybe a string instead";
 
// OK, definitely a boolean
notSure = false;
⇒ **Any và Unknow: Any**Cũng khá tương tự với **Unknown**khi chúng ta không biết trước được kiểu dữ liệu, tuy nhiên với any chúng ta có thể truy cập vào thuộc tính mặc dù không tồn tại của nó. Vd let user: any = 1; user.getDown() Chúng ta sẽ không gặp lỗi gì trong trường hợp này. Tuy nhiên khi dùng với unknown chúng ta sẽ bị lỗi let user: unknown = 1; user.getDown() Object is of type 'unknown'.

Void: Cũng giống như any nhưng void được sử dụng là đầu ra của hàm.

function warnUser(): void {
 alert("This is my warning message");
}
null và undefined
Cũng như JavaScript, TS có 2 kiểu dữ liệu null và undefined. Tuy nhiên tùy thuộc vào bạn tùy chỉnh strictNullChecks trong tsconfig.json thế nào mà chúng sẽ hành xử khác nhau.

strictNullChecks: true: Trình biên dịch TS sẽ báo lỗi nếu bạn không kiểm tra biến có phải null hay undefined không.
strictNullChecks: false: Gặp nhau làm ngơ
// strictNullChecks: true
function doSomething(x: string | null) {
  // Error: Object is possibly 'null'.
  console.log('Hello, ' + x.toUpperCase())
}

// Sửa lại
function doSomethingSafer(x: string | null) {
  if (x === null) {
    // Do nothing
  } else {
    console.log('Hello, ' + x.toUpperCase())
  }
}
Never: là một kiểu không chứa giá trị. Do đó bạn không thể gán bất kì giá trị nò cho biến có kiểu never

Thông thường, bạn sử dụng kiểu never để đại diện cho kiểm tra trả về của một hàm luôn tạo ra lỗi

function raiseError(message: string): never {
    throw new Error(message);
}
object
Bên cạnh các kiểu giá trị phổ thông, chúng ta cũng rất hay làm việc với object. Bạn có thể mô tả kiểu cho thuộc tính của object như sau:

// Bạn cũng có thể dùng , để ngăn cách các thuộc tính, mặc dù ; phổ biến hơn.
// { id: number, username: string }
function printUser(user: { id: number; username: string }) {
  console.log(`Hello ${user.username}`)
}
Nếu object có một thuộc tính không bắt buộc, bạn có thể thêm ? vào sau tên thuộc tính đó.

function printUser(user: { id: number; username: string; role?: string }) {
  // Khi bạn truy xuất một thuộc tính không tồn tại, JavaScript sẽ trả về undefined.
  if (role !== undefined) {
    console.log(`Hello ${user.username} of role ${user.role}`)
  } else {
    console.log(`Hello ${user.username}`)
  }
}
Union type
Kiểu dữ liệu kết hợp (union type), giống như tên gọi, cho phép bạn kết hợp hai hay nhiều kiểu dữ liệu lại với nhau. Mỗi kiểu dữ liệu trong union sẽ được gọi là một kiểu dữ liệu thành viên (member).

function printId(id: string | number) {
  console.log(`Your ID is ${id}`)
}

printId('123') // ✅ OK
printId(456) // ✅ OK
printId({ id: 22342 }) // ❌ Error
Khi dùng union type, TS sẽ kiểm tra để chắc chắn phương thức bạn gọi đến tồn tại trong các kiểu dữ liệu thành viên.

function hasThree(x: string | number[]) {
  return x.includes(3) // ✅ OK vì `includes` đều có trong `Array.prototype` và `String.prototype`
}

function printId(id: string | number) {
  // ❌ Error
  // Property 'toUpperCase' does not exist on type 'string | number'.
  // Property 'toUpperCase' does not exist on type 'number'.
  console.log(`Your ID is ${id.toUpperCase()}`)
}
Để chương trình chạy đúng và an toàn hơn, chúng ta nên dùng typeof để kiểm tra kiểu dữ liệu trước.

function printId(id: string | number) {
  if (typeof id === 'string') {
    console.log(`Your ID is ${id.toUpperCase()}`)
  } else {
    console.log(`Your ID is ${id}`)
  }
}
Hoặc kiểm tra mảng với Array.isArray().

function sayHi(username: string | string[]) {
  if (Array.isArray(username)) {
    console.log(`Hello ${username.join(', ')}`)
  } else {
    console.log(`Hi ${username}`)
  }
}
Type alias
TS cho phép bạn đặt lại tên cho các kiểu dữ liệu bằng từ khóa type.

// Đặt một kiểu Username là tên gọi khác của kiểu string
type Username = string

// Đặt một union type có tên là UserId
type UserId = string | number

// Đặt ứng dụng
// Bạn không cần dùng ; hay , nếu mỗi thuộc tính nằm ở một dòng riêng
type User = {
  id: UserId
  name: Username
  role?: string
}

function printUser(user: User) {
  console.log(`Hello ${user.name}`)
}
Sử dụng type alias giúp giảm trùng lặp và cho phép tái sử dụng các kiểu dữ liệu một cách thống nhất trong toàn bộ ứng dụng. type còn có các thao tác khác mà chúng ta sẽ tìm hiểu ở các bài viết sau.

Interface
Interface là một cách khác để khai báo kiểu cho các object.

interface User = {
  id: string | number
  name: string
  role?: string
}

function printUser(user: User) {
  console.log(`Hello ${user.name}`)
}
⇒ So với type alias ở trên, interface cho phép bạn kế thừa một interface khác.

interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const pet: Bear = { name: 'Poo', honey: true }
Ngoài ra bạn cũng có thể thêm thuộc tính cho một interface đã được khai báo từ trước.

interface Bear {
  name: string
}

// ✅ OK. Bear sẽ có hai thuộc tính `name` và `honey`
interface Bear {
  honey: boolean
}
So sánh với type thì…

type Bear = {
  name: string
}

// ❌ Error: Duplicate identifier 'Bear'.
type Bear = {
  honey: boolean
}
Trong hầu hết các trường hợp, bạn nên dùng interface để khai báo kiểu cho object nhe.

Type Assertion
Type Assertion là một cơ chế logic của TypeScript, nó cho phép bạn đặt kiểu của biến và yêu cầu TypeScript không tự suy ra kiểu của biến đó