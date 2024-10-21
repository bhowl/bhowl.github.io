**Meta description:** The Transmission Control Protocol (TCP) is a connection-oriented protocol that uses the three-way handshake to transmit and receive data. 

# The TCP Three-Way Handshake Explained 
The Transmission Control Protocol/Internet Protocol (TCP/IP) is the most widely used internet connectivity protocol. It enables the communication of data between computers across a transmission medium. 

TCP/IP paired with Hypertext Transfer Protocol (HTTP) has revolutionized the way we do things, allowing for information to be passed nearly instantaneously around the world. The internet as we know it (mostly in web browsers) is possible via the network connection created by the TCP three-way handshake. So, let's look into what it’s all about. 

```TCP/IP
TCP: ....., seq: #, ack: #, win: #, src: # dst: # 

TCP: Source Port = CLIENT/SERVER
 TCP: Destination Port = SERVER/CLIENT
 TCP: Sequence Number = #
 TCP: Acknowledgement Number = #
 TCP: Data Offset = #
 TCP: Reserved = #
 TCP: Flags = #

TCP: ..0..... = No urgent data
 TCP: ...0.... = Acknowledgement field not significant
 TCP: ....0... = No Push function
 TCP: .....0.. = No Reset
 TCP: ......1. = Synchronize sequence numbers
 TCP: .......0 = No Fin

TCP: Window = #
 TCP: Checksum = #
 TCP: Urgent Pointer = #
 TCP: Options

TCP: Frame Padding
```

## What is TCP/IP?
The TCP/IP model is a four-layer protocol stack supporting computer networking and connections. It is an internet protocol suite important for defining how data is processed, transmitted, and received. 

The model is divided into the following layers, each performing specific duties:

* Application layer  
* Transport layer 
* Internet layer 
* Network Access layer 

The Transport layer is an interface for network applications that allows for error checking, flow control, and verification of communications. Data from an application program interface (at the Application layer) passes to the Transport layer and then to the Transmission Control Protocol (TCP). The protocol creates the connection between a client and server via the three-way handshake.

* A client is a computer requesting services from another computer on a network. 
* A server is a computer offering services to other computers on a network.

## What is the Transmission Control Protocol (TCP)?
The Transmission Control Protocol (TCP) is a reliable connection-oriented protocol. A connection-oriented protocol begins, maintains/monitors, and ends a connection between two computers.
### Features of TCP
TCP processes data via Stream-oriented Processing, which means that it accepts a byte of data at a time and formats it into segments. A segment is a data package encapsulating the entire Application layer message. If the data message arrives out of order, TCP can resequence the data to restore to the original order.

A TCP connection is full-duplex. Data can flow independently in each direction (from client to server). The sending machine records status information to ensure delivery. Every data package sent across the network receives an acknowledgment from the receiving computer. A data segment is formatted into 13 distinct parts, appearing below in the chart and above in the example display of TCP status info. 

<dl>
<dt>Source Port (16-bit)</dt>
<dd>Port number of the application on the sending machine</dd>
<dt>Destination Port (16-bit)</dt>
<dd>Port number of the application on the receiving machine</dd>
<dt>Sequence Number (32-bit)</dt>
<dd>The byte number of the first byte of data in the TCP packet sent</dd>
<dt>Acknowledgment Number (32-bit)</dt> 	<dd>Acknowledges a received segment - the value +1 of the number the receiving computer expects to receive.</dd> 
<dt>Data Offset (4-bit)</dt>
<dd>Tells receiving machine where the data begins</dd>
<dt>Reserved (6-bit)</dt>	
<dd>Reserved for future development</dd>
<dt>Control flags (1-bit each)</dt>	
    <ul>
    <dt>URG</dt>	
    <dd>Urgent pointer field</dd>
    <dt>ACK</dt>
    <dd>Acknowledgment</dd>
    <dt>PSH<dt>
    <dd>Push all data to the receiving application</dd>
    <dt>RST<dt>
    <dd>Reset connection</dd>
    <dt>SYN<dt>	
    <dd>Synchronization request (used to open a connection)</dd>
    <dt>FIN</dt>
    <dd>A sending computer has no more data to transmit (used to close connection)</dd>
    </ul>
<dt>Window (16-bit)</dt> 	
<dd>The range of sequence numbers beyond the last acknowledged sequence number that the sending machine can transmit without further acknowledgment. (control flow)</dd>
<dt>Checksum (16-bit)</dt>	
<dd>Checks for corruption in the datagram</dd>
<dt>Urgent Pointer (16-bit)</dt>	
<dd>Urgent information point in sequence number</dd>
<dt>Options</dt>	
<dd>Optional settings</dd>
<dt>Padding</dt>	
<dd>Ensures 32-bit boundary</dd>
<dt>Data</dt>	
<dd>Additional data being transmitted with the segment</dd>
</dl>

## What is a TCP three-way handshake? 
In order to start a TCP connection, a three-way handshake must occur. This is accomplished by a sequence/acknowledgment system where the client and server synchronize their sequence numbers. A network connection is made between client and server in three steps (a.k.a. handshakes). 

### Establishing a connection 
#### Step 1
The client sends a segment to the server. The data segment includes the `SYN` number, `ACK` number, and client’s ISN (initial sequence number). The `SYN` is a synchronization request, and the `ACK` states the current value of the acknowledgment sequence. If a connection is being made for the first time, then `ACK` starts at 0. 

#### Step 2 
The server receives the client’s segment. In response, the server sends back an `ACK` that is +1 in value from the client’s ISN number received, acknowledging the sequence number. Additionally, a request `SYN` is sent from the server, along with its ISN, to the client.

#### Step 3
The client receives the server’s request for synchronization and responds with a segment that contains an `ACK` to acknowledge receipt of the server’s ISN, and the connection is established. 

### Connection
Once the TCP three-way handshake is made, the data segment is then passed to the Internet layer. At this layer, IP provides logical-addressing info, encloses data into a datagram, and provides routing to support delivery across the interconnected network. Finally, at the Network Access layer, which provides an interface, a datagram is received and formatted into a frame. The frame is then converted into a bitstream that is transmitted over the network medium. 

### Terminating a connection
#### Step 1
The client sends a segment containing a `FIN` value set to 1. The client application then enters fin-wait state, which allows it to continue to receive and process segments in the queue. However, no additional data is transmitted. 

#### Step 2
Then, the server sends `ACK` back to the client, which acknowledges receipt of the `FIN`, and sends any remaining segments. 

#### Step 3
The server notifies the local application that a `FIN` segment has been received and then transmits `FIN` to the client, signaling the connection’s close. 

#### Step 4
Once received, the client sends `ACK` to the server, acknowledging receipt of `FIN`, and the connection gracefully closes.

## Summary 
For the World Wide Web, “clients” are web browsers that connect to web servers and present data in a predetermined format. The web server communicates using HTTP. After a TCP connection is made, the browser uses HTTP commands to request a web page URL, which ultimately results in what you see on the screen made with HTML, CSS, and JavaScript. 

So, what is a TCP three-way handshake? Well, it is what makes all this possible. It is a graceful connection-oriented protocol to establish, maintain/monitor, and terminate network connections reliably between two computers. You can learn more with [our courses](https://www.codecademy.com/catalog). 


