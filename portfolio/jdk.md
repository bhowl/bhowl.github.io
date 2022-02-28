**Meta Description:** What is JDK? Java Standard Edition Development Kit for building programs with the Java programming language. 

# What is the Java Development Kit (JDK)?
When someone downloads Java, they are downloading a Java Development Kit (JDK). The kit includes pre-built code packages, modules, infrastructure, and documentation essential for Java programming. 

Java Dev Kits provides the tools necessary for developing, testing, and monitoring Java programs written in the Java programming language and running on the Java platform. Admittedly, some Java documentation can get confusing because some things can seem conflicting, and there are so many Java acronyms: Java this, Java that. 

The Java community is well known for being very active and helpful to their fellow counterparts. However, you’ll run into documents that have grammatical errors or are left unfinished. Documents get created and are then seemingly left by the wayside. We try to help remove the time-consuming legwork of finding reliable resources. Consider trying out our courses as you continue to [learn Java](https://www.codecademy.com/learn/learn-java). Herein we will work through explaining what JDK is. 

## Java standard edition (Java SE)
First, there’s Java SE, which lets you develop and deploy Java applications on desktops and servers. Java technology encompasses both a programming language and a platform. When you download an implementation of Java SE, you will be downloading both of these. When installing a JDK implementation, you will likely want to download the most recent version, JDK 17.

OracleJDK and OpenJDK are the two types of JDK software being updated by development teams today. The former is a commercial build, updated by Oracle. Whereas the latter is an open-source project with Oracle and IBM teams helping things run smoothly.

## [OracleJDK](https://www.oracle.com/java/technologies/downloads/#jdk17-linux)
In the OracleJDK link, you will notice that the download is for Java™ Platform, Standard Edition Development Kit (JDK™). The Java Platform is necessary for executing code. “The JDK is a development environment for building applications and components using the Java programming language.” - OracleJDK. 

Business subscriptions are available with the OracleJDK. The perks are entitlement to GraalVM enterprise, Java Management Service, and bundled patch releases (BRPs).

## [OpenJDK](https://jdk.java.net/17/)
The open-source version of JDK17 also has an implementation of the Java SE platform. This version of the dev kit has new features for macOS, applet API, and Vector API (among others). On this site, JDK 18 is available for early-access download. 

## Java programming language 
To better understand what the JDK is, it’s important to know the steps taken from writing to running a Java application. 

1.	First, source code is written in a text editor with the `.java` extension. 
2.	Then, the source code is compiled into `.class` binary files. A compiler translates the code within the text editor into bytecode which is similar to the machine code that computer hardware uses to function. 
3.	Lastly, the code is executed (ran) using a Java launcher tool, which accomplishes this via the Java Virtual Machine (JVM) instance. 

These steps are, in part, what makes Java a dynamic programming language. Because after compiling, JVM instances can run the bytecode for the same application on many different platforms: Linux, Windows, Solaris, etc. 

This is why the Java slogan is “write once, run everywhere” because when applications are written and then compiled into bytecode, they can run on any platform. We write more about this in our blog: [What is Java used for?](https://www.codecademy.com/resources/blog/what-is-java-used-for/) 

## Java platform
Java SE includes a JDK and a Java Runtime Environment (JRE). As we start gaining a better understanding of what JDK is, we should also cover JRE. So, what is JRE?

>“The JRE provides the libraries, Java virtual machine, and other components necessary for you to run applets and applications written in the Java programming language. This runtime environment can be redistributed with applications to make them free-standing.” - [Java Documentation](https://docs.oracle.com/javase/8/docs/technotes/guides/index.html) 

So, the JRE runs the bytecode via the JVM instance. Another component of the Java Platform is the Java Application Programming Interface (API). That’s yet another Java acronym to learn. What is Java API?

>“The API is a large collection of ready-made software components that provide many useful capabilities. It is grouped into libraries of related classes and interfaces; these libraries are known as packages.” - [Java Tutorials](https://docs.oracle.com/javase/tutorial/getStarted/intro/definition.html) 

## JDK Contents and Tools
Now let’s look at some specific JDK components that you will be able to use after installing the JDK. Along with these tools, there will be extra utilities, documentation, and other basic tools. The contents table shows the available files and directories included in the JDKs. The tools table goes a little further and shows specific components within the contents. 
 

|Contents|
 :--- |
Executables|
Configuration files|
C header files|
Compiled Java modules|
Copyright and License modules|
Additional libraries|

|Tools|
 :--- |
Debugger Architecture|
VM Tool Interface|
Javadoc Tool|
Dynamic Attach|
Console API|
 
## Summary: what is JDK?
Java is a versatile, compatible language. It has been used for software development, mobile applications, and large system development. When downloading Java, you can choose the JDK you prefer. Recent JDKs include the JRE and contain other tools important for creating Java programs, such as the Java compiler. Additionally, JDK provides the tools to test and update Java applications with ease. Here are the important acronyms to remember discussed in this blog: 

* Java SE
* JDK
* JVM
* JRE
* Java API

And here is one last one: IDE, which means Integrated Development Environment. Essentially, an IDE combines the text editor and compiler into one language. Eclipse and Visual Studio are popular IDEs for Java. However, even when using an IDE, you will need JDK installed.

You can read more about Java in our more in-depth [articles](https://www.codecademy.com/articles). For Java practice, our [Learn Java](https://www.codecademy.com/learn/learn-java) course is the move. It doesn’t require any prerequisites. It takes 25 hours to complete key takeaway skills in object-oriented programming languages (OOP) fundamentals. During the course, which you can try for free, you’ll build 7 Java projects. If you have our [Pro](https://www.codecademy.com/pro/membership) membership, you can earn certification for completing the course. 
