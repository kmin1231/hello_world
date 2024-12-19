# Hello, world!

<h3 style="color: #81BEF7;">Primary Development Environment</h3>

```
$ uname -a
Linux ASUSMIN 5.15.153.1-microsoft-standard-WSL2 #1 SMP
Fri Mar 29 23:14:13 UTC 2024 x86_64 x86_64 x86_64 GNU/Linux
```
<br>

> <h2>C</h2>
```
$ gcc --version
gcc (Ubuntu 11.4.0-1ubuntu1~22.04) 11.4.0
Copyright (C) 2021 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.
There is NO warranty; not even for MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE. 
```

```
$ gcc hello_c.c -o hello_c
```

```
$ ./hello_c
```

<br>

> <h2>C++</h2>
```
$ g++ --version
g++ (Ubuntu 11.4.0-1ubuntu1~22.04) 11.4.0
Copyright (C) 2021 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.
There is NO warranty; not even for MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.
```

```
$ g++ hello_c++.cpp -o hello_c++
```

```
$ ./hello_c++
```

<br>

> <h2>JavaScript</h2>
```
$ node -v
v20.12.2

$ npm -v
10.5.0

$ nvm -v
0.40.1
```

```
$ node hello_javascript.js
Server running at http://localhost:3000
```

```
$ curl localhost:3000
Hello, world!
```

<br>

><h4>Express</h4>
```
$ npm install express
```

```
$ npm ls | grep express
├── express@4.21.0
```

```
$ node hello_express.js
Server running at http://localhost:3000
```

```
$ curl localhost:3000
Hello, world!
```

<br>

> <h2>TypeScript</h2>
```
$ npm install typescript
```

```
$ tsc -v
Version 5.6.2
```

<h4>(A) Run with <code>npx</code> <code>ts-node</code></h4>

```
$ npx ts-node hello_typescript_ts.ts
Server running at http://localhost:3000
```

```
$ curl localhost:3000
Hello, world!
```

<h4>(B) Run with <code>ts-node</code></h4>

```
$ npm install -D ts-node
```

```
$ npm ls | grep ts-node
├── ts-node@10.9.2
```

```
$ ts-node hello_typescript_ts.ts
Server running at http://localhost:3000
```

```
$ curl localhost:3000
Hello, world!
```

<h4>(C) Transpile TypeScript to JavaScript</h4>

```
$ tsc hello_typescript_ts.ts
```

```
$ node hello_typescript_ts.js
Server running at http://localhost:3000
```

```
$ curl localhost:3000
Hello, world!
```

<br>

><h4>Express</h4>
```
$ npm install -D @types/express
```

```
$ npm ls | grep express
├── @types/express@5.0.0
├── express@4.21.0
```

```
$ ts-node hello_express_ts.ts
Server running at http://localhost:3000
```

```
$ curl localhost:3000
Hello, world!
```

<br>

> <h2>Python</h2>
```
$ python --version
Python 3.11.7
```

```
$ python hello_python.py
```

><h4>Flask</h4>
```
$ pip install flask
$ flask run
```

```
$ curl localhost:5000
Hello, world!
```

<br>

> <h2>Go</h2>
```
$ go version
go version go1.23.1 linux/amd64
```

```
$ go build hello_go.go
```

```
$ ./hello_go
```

<br>

> <h2>Kotlin</h2>
```
$ kotlin -version
Kotlin version 2.1.0-release-394 (JRE 21.0.5+11-Ubuntu-1ubuntu122.04)

$ kotlinc -version
info: kotlinc-jvm 2.1.0 (JRE 21.0.5+11-Ubuntu-1ubuntu122.04)

$ java -version
openjdk version "21.0.5" 2024-10-15
OpenJDK Runtime Environment (build 21.0.5+11-Ubuntu-1ubuntu122.04)
OpenJDK 64-Bit Server VM (build 21.0.5+11-Ubuntu-1ubuntu122.04, mixed mode, sharing)
```

```
$ kotlinc hello_kotlin.kt -include-runtime -d hello_kotlin.jar
```

```
$ java -jar hello_kotlin.jar
```

><h4>Run a Kotlin script file</h4>
```
$ kotlin hello_kotlin.kts

$ kotlinc -script hello_kotlin.kts
```

<br>


> <h2>Rust</h2>
```
$ rustc --version
rustc 1.81.0 (eeb90cda1 2024-09-04)

$ cargo --version
cargo 1.81.0 (2dbb1af80 2024-08-20)
```

```
$ rustc hello_rust.rs
```

```
$ ./hello_rust
```

<br>

> <h2>R</h2>
```
$ R --version
R version 4.1.2 (2021-11-01) -- "Bird Hippie"
Copyright (C) 2021 The R Foundation for Statistical Computing
Platform: x86_64-pc-linux-gnu (64-bit)
```

```
$ Rscript hello_R.R
```

<br>

> <h2>Ruby</h2>
```
$ ruby --version
ruby 3.3.5 (2024-09-03 revision ef084cc8f4) [x86_64-linux]

$ rbenv --version
rbenv 1.3.0-4-gc335ab8
```

```
$ ruby hello_ruby.rb
```

<br>

> <h2>Swift</h2>
```
$ swift --version
Swift version 6.0 (swift-6.0-RELEASE)
Target: x86_64-unknown-linux-gnu
```

```
$ swift hello_swift.swift
```



<br><br>
> making changes...

<br>
