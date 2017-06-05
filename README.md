# Full-Stack-Program

# Internet, how it works?

  - example:
      - someone in England visits a webpage in the states :www.worldsciencefestistival.com
      - their computer asks the worldsciencefestistival server for a copy of the webpage
      - the computer sticks the request into a virtual envelope called a packet
      - the packet is wrapped with specific information about that request including the pages IP
      - the computer sends the packet out of the house and into the street via large underground copper wires
          - it passes through small regional networks before ending up at tele house north in London which is Englands main internet hub
          - the IP address on this packet tells the hub that the worldsciencefestistival server is actually in Los Angeles

      - tele-house north sends the packet out as light, over fiberobtic cables berried deep beneath the ocean.
          - the packet is then received in NYC at 60 hudson street nyc, the largest internet hub on the east coast.
          - the hub sends the packet through a series of regional networks connecting ny to la where the worldsciencefestistival server resides.
              - the server reads the requests and gets ready to send the webpage to England
              - but webpages made up of images and text are too large to send as a single packet of data.


      - So how does the return get completed:
          - The webpage gets pulverized into thousands of packet of data
          - each one wrapped with all of the information it needs to rebuild itself in England.
          - the packet is sent to LA one willshire Hub, which checks the traffic report before sending them out
          - through miles of land they travel, checking in through different Hubs
          - the packets scramble to figure out the most efficient way to to get to main hubs like NYC where they are redirected back to England as light riding a fiber of glass as thick as a dollar coin.
              - then back on copper wires
              - through regional British networks until ALL the packets reach their destination
              - and then the webpage is in front of you!
              - this all happens in a second.



      - And this epic journey is played out trillions and trillions of times a day on this network of network which is the Internet.


# Front-end vs Back-End

- Example:
    - let's go to www.facebook.com
    - creates an http request asking for facebook.com
    - the goes to fbooks server
    - fbook then decides what page to send me back
    - sends html,css and js and browser displays it.
    - this is what the browser sees, which is essentially the front-end but all of this comes from the back-end/server side logic it constructs the html and css that is sent back.
    -  interaction and persisting on events like google news, weather, scores, new stories.

- Static vs dynamic page, both are webpages, but dynamic pages change based off server side code.
