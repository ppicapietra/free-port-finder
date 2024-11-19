import getAvailablePort from "./index.mjs";

( async () => {
  console.log( await getAvailablePort( 3000 ) );
} )();
