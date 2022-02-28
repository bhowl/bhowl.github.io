**Meta Description:** Functional programming is a programming paradigm implementing functions as code blocks. Functional languages are immutable, avoid a shared state, and do not introduce side effects.

# What is Functional Programming?
First and foremost, functional programming (FP) is a declarative programming paradigm. Paradigms categorize programming languages based on their distinct set of concepts. So, a program is considered declarative when its structure and elements do not follow a sequential order of execution (or control flow). As such, this article will focus on explaining what the declarative functional programming paradigm is.

## A functional understanding 
Functional programming is the process of composing and calling functions to construct an application. Pure and first-class/higher-order functions are the main building blocks of FP. But before we cover the different types of functions, let’s take a look at what general functions do. 

> “Functions in programming are reusable code blocks that can take any form.” - [mtf, Codecademy Forum Moderator](https://discuss.codecademy.com/t/functions-in-programming/388981) 

## What is a function?
The basis of functional programs is lambda calculus, a mathematical notation system of applying functions to arguments. Thus, the primary elements of FP are functions and variables. This is contrary to objects and method-statements used in OOP, which may be more familiar to you. 

In math, a function is an expression that relates an argumental independent variable to obtain a resulting dependent variable. In other words, a function expression relates an input to exactly one output. 

As a reminder, an independent variable defines a cause, so it could be any value. And a dependent variable is the effect. So its value depends on whatever the independent’s value is. 

Let’s look at an example: 

* `f(x)=y`
* `f` is the function name
* `x` is the input
* `y` is the output 

The idea is similar in FP in that a function is given a name associated with exactly one parameter (input value) and one return call (dependent output value). In FP, the input value is immutable (or unchangeable). 

```JavaScript
//composing a function
function f(x){
	return y; 
}
 
//calling a function
f(x)

//function return call
y
```

Above and below are examples of functions in JavaScript, which is capable of functional programming. The first example simply shows the syntax used to compose, call, and return a function. Where `f` is the given function name, `x` is the immutable parameter, and `y` is the function’s return call. 

You could define `x` and `y` with the `var` attribute, like this: 
 
```JavaScript 
//composing a function
var x = ‘hi’ 
var y = ‘hello’
function f(x){
	return y; 
}
 
//calling a function
f(x)
 
//function return call
‘hello’
```

Once defined, `x` will always be the string that was assigned to it (“`hi`”). This is because it is immutable. We could also call the function with “`hi`” in the input, like this:  
 
```JavaScript 
//calling a function
f(‘hi’)
 
//function return call
‘hello’
```

The next example is of composing a nested function. Here, a function is encapsulated within another function in a modular way. When nesting, the order that functions are composed is essential. This is because functional processes act on each other to receive and pass along values in nests. So, FP follows a mathematical sequence rather than having a control flow.  

```JavaScript 
//nested function
function f1(a){
	function f2(b){
		return d;
	};
	return c; 
}

//calling a function
//1
f1(a)
//2
f2(b)
 
//function return call
//1
c
//2
no return 
```

In the nesting example, `f2` can access all local elements of its immediately enclosing function, `f1`. And although there is none in this example, `f2` could also access any function(s) enclosing that function. `f2` is “invisible” outside of its immediately enclosing function. So, calling `f2(b)` will not return a result. Calling `f1(a)` will return `c`.

## Characteristics and terminology of functional programming

In this section, we will discuss three main characteristics of programming functionally. These concepts will help you better understand FP overall and the key terms used in FP-capable languages. The characteristics we will elucidate work together and help define what FP is in contrast to imperative languages. They are immutability, state, and side effects. 

### 1. Immutability
Most imperative programming languages use assignment statements, which allow for variables to be reset. “Functional programs do not contain assignment statements, so variables, once given a value, never change.”  - [John Hughes on why functional programming matters](https://www.cse.chalmers.se/~rjmh/Papers/whyfp.pdf).

In FP, once the independent variable is assigned, it is immutable. When data is immutable, it cannot be mutated (or changed)  — opposed to mutable data, which can be changed, like in other paradigms. This is an important aspect of declarative programming languages, like FP. It gives insight into how memory is stored, in which data structures always remain the same. 

Due to immutability, there is no control flow because the evaluation order will not change the desired result. Also, immutable data makes for improved security because hackers will not be able to make changes. 

### 2. State
The role of state in programming languages is important to consider, as this concept is associated with a program’s memory of variables, objects, open file descriptors, etc. FP doesn’t maintain an application state. 

When an application performs tasks that modify global data, in FP, there is no application state. This property supports immutability in that the effect of having no state in an application causes functions to return the same result every time for a given input. Even when the application calls the function. This aspect is said to make functional programming more predictable. 

In imperative programming languages, the state allows for values to be trackable between function calls. The state is also sometimes used to produce results based on other parts of the environment, which can potentially produce side effects. 

### 3. Side Effects
Functional programming does not introduce side effects, whereas some imperative languages actually depend on side effects to occur in order to work properly. We know a function call in FP will only compute its result — no other effects occur. 

In other programming paradigms, a side effect occurs when a function modifies variable data, such that when the function call is returned, the variable is changed in some way. Because of this, having no side effects can make debugging FP easier. 

No side effects also play into the control flow of the program because, with FP, there is no control flow other than the order of execution determined by the mathematical function sequence. There are no (other) effects that occur to “redirect” the execution order. An imperative programming language cannot freely evaluate expressions at any time, like in FP. 

>“After all, the use of side effects in coding is really a type of shortcut that can make the code harder to understand and manage, besides being far more prone to bugs and other reliability issues.” - [Functional Programming for Dummies](https://www.amazon.com/gp/product/1119527503/ref=as_li_tl?ie=UTF8&tag=wiley01-20)

A program that does not introduce side effects enforces referential transparency. This leads us to the next section, Terminology.

## Terminology
Below aims to be a beginner-friendly collection of key terms necessary to understand functional programs. However, a base understanding of computer science as a whole, as well as other paradigms, can be helpful when using these terms in action. 

This isn’t a comprehensive list because there are certainly other terms that are important to learning FP. These terms relate to the main characteristics of FP, so are essential to help you develop an understanding of this declarative programming paradigm.

<hr>

<dl>
<dt><strong>Pure functions</strong></dt>
<dd>
<p>
A function is pure when it relates the input and output with no side effects. Pure functions require an immutable state. Contrarily, a function is impure when it can introduce unwanted effects to other parts of the coding project (i.e., side effects).
</p>

Every time you call for a pure function, it will return the same result without affecting other values in the local environment. 

Writing pure functions has inherent benefits over writing impure functions, as discussed in the Characteristics section.
</dd>

<dt><strong>Referential transparency</strong></dt>
<dd>
<p>
In mathematics, a function and an input value will always return the same output value. Thus, functions in mathematics are referentially transparent.
</p>

>“An expression that can be replaced with its value without changing the behavior of the program is said to be referentially transparent.” - [GitHub functional programming jargon](https://github.com/hemanth/functional-programming-jargon#referential-transparency)

Pure functions have referential transparency. Programs, like FP, that do not introduce side effects, enforce referential transparency because without side effects there is only one output that can be returned.
</dd>

<dt><strong>First-class functions/Higher-order functions</strong></dt>
<dd>

The difference between first-class functions and higher-order functions is made clear in this [StackOverflow explanation:](https://stackoverflow.com/questions/10141124/any-difference-between-first-class-function-and-high-order-function)

>“When you say that a language has first-class functions, it means that the language treats functions as values – that you can assign a function into a variable, pass it around, etc. Higher-order functions are functions that work on other functions, meaning that they take one or more functions as an argument and can also return a function.” 

First-class functions can act as higher-order functions. In other words, they allow the passing of functions as arguments to other functions. So, in FP, programmers can provide a function as the input to a function. 

Mapping is a technique that is made possible through higher-order functions. A map argument contains a function and a list. A map will return a return list where the function is applied to each item in the list. 

First-class functions are important to lambda calculus, and they are just as important to FP. Higher-order functions enable recursion (the next term) because instead of passing variables in function inputs, you can pass functions. 
</dd>

<dt><strong>Recursion</strong></dt>
<dd>
<p>Essentially, recursion allows a function to call itself within its own code block. Given the state’s role, recursion is a core problem-solving process that works differently in FP from other paradigms.</p>

Recursion allows the solution to one problem to be dependent on smaller solutions for the same problem. This is a way of breaking down a large, complex problem into smaller, more manageable sub-problems. 

>“Recursion, in its essence, is a method of performing tasks repetitively, wherein
the original function calls itself.” - [Functional Programming for Dummies](https://www.amazon.com/gp/product/1119527503/ref=as_li_tl?ie=UTF8&tag=wiley01-20)

An example of recursion in practice is using this method in place of looping. In declarative languages, looping is not possible because there is no state and the data is immutable. 

When programming in languages with both imperative and declarative capabilities, recursive functions can be favorable over looping as they improve readability.

Recursion can be difficult to wrap your head around. However, having a proper understanding of this concept can be beneficial to many different programming languages. If you are interested in learning more about recursion, Codecademy is here to help — check out this exclusively recursive [Python course](https://www.codecademy.com/learn/learn-recursion-python). 
</dd>

<dt><strong>Lazy evaluations</strong></dt>
<dd>
<p>FP supports lazy evaluations, which are mechanisms of evaluation that don’t rely on control flow. This simply means that evaluations are made when they need to be  — instead of strict evaluations, seen in imperative languages, that evaluate more often in order to maintain a control flow.</p>

Strict evaluations can restrict programmers, whereas lazy evaluations do not. Lazy evaluations will improve execution speeds and reduce errors because they will not perform actions before they need to. 

Functional Constructs are also possible since FP is considered a lazy program. These are things like Lazy Lists, Lazy Maps, and so on. Lazy evaluation also enables an enhanced ability to create data structures that other languages can’t support.

<dt><strong>Data structures</strong></dt>
<dd>
<p>Functional programs have persistent data structure representation. This means that old versions of data structures are still available for use.</p> 

This is opposed to ephemeral data structures, in which any changes cause older versions to be destroyed. Here is yet another area of FP where immutability comes into play. 

Functional programs work with purely functional data structures. These are data structures with immutability and don’t introduce side effects or execution orders. 

A few examples of data structures in FP include lists, stacks, queues, and hashes. 
</dd>
<hr>

## What is functional programming used for?
### Current applications
FP is applicable to different areas of expertise, such as academic research, the tech industry, and education. The most commonly used native languages include LISP, Haskell, Erlang, Clojure, and F#. In comparison, some widely used functional-capable languages include JavaScript, Python, C++, Java, and Scala. Functional programs are used for the benefits of the characteristics that they deploy. 

Making changes to functional code is easier with FP compared to imperative programming because the person making the modifications doesn’t have to think about other parts of the code. They only need to consider the math involving the functions. 

Security is another benefit to functional programming languages because the data is immutable, making it safer from hackers. Parallel programming is easier with FP, which allows for multiple processes to be carried out simultaneously. Other benefits of using FP include easier debugging, modular capabilities, enhanced readability, and (again) no side effects. 

### Future outlook
Most programmers use functions, but not all know what the functional programming paradigm is. This is because, for some, the functional programming paradigm is second nature. Programmers often use functions in OOP, so they are commonly using functions in an impure way. 

Even if you ask an experienced programmer what functional programming is, they may tell you, “It seems like a fancy term for writing functions, and just about all the code I write uses functions.”  

Although there is some truth to this answer, it might not be the best response to show your knowledge of the paradigm. Recently, FP skills have been sought after by employers, and some programmers wonder [why FP isn’t the most popular language?](https://www.youtube.com/watch?v=QyJZzq0v7Z4) After all, writing pure functions has inherent benefits over writing impure functions. 

Moreover, even knowledge of different programming paradigms is becoming increasingly valuable. Job interviewers are asking candidates about their FP experience, even for OOP roles. So, if a potential employer asks you what functional programming is, it’s good to have an answer prepared. Check out these blogs, which touch on FP, to review interview questions and answers for [JavaScript programmers](https://www.codecademy.com/resources/blog/javascript-interview-questions/) and general [software developers](https://www.codecademy.com/resources/blog/software-developer-interview-questions-and-answers/).

## Conclusion: What is functional programming?

The main concepts of functional programming work together. For you to grasp a better understanding of this paradigm, it is necessary to understand the interplay of concepts. Paradigms, in general, are foundational aspects of programming, as they help define core concepts. So, if you are just beginning your learning journey with functional programs, it can be beneficial to first take on the basics of computer science. 

Our [core foundations](https://www.codecademy.com/learn/paths/code-foundations) learning path will teach you essential computer science techniques to create a base level of understanding from which you can start writing code that includes variables and functions. With that in mind, another great way to learn about this interplay is by practicing, especially for aspects like the role of state and data structures. 

Continue practicing by taking on other courses. Practice as a means of learning to help develop your ability to work with the abstract ideas involved in FP. Our [course catalog](https://www.codecademy.com/catalog/all) includes classes on FP-capable programming languages. Every language has its own syntax that comes with distinct learning curves. However, as you learn the core components, you will see how the concepts come together, combined in the interworkings of the FP paradigm. 