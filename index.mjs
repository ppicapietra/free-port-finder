import net from "node:net";

/**
 * @returns {Promise<number>}
 */

export default function getAvailablePort( desiredPort ) {
  const PORT = desiredPort || 0;
  return new Promise( ( resolve ) => {
    const server = net.createServer();
    server.listen( PORT, () => {
      let { port } = server.address();
      server.close( () => {
        resolve( port );
      } );
    } );

    server.on( "error", ( err ) => {
      if ( err.code === "EADDRINUSE" ) {
        resolve( getAvailablePort( 0 ).then( port => resolve( port ) ) ); // 0 means get a random available port
      }
      else {
        reject( err );
      }
    } );
  } );
}

// export default getAvailablePort;
