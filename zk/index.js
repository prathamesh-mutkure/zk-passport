const verify = async () => {
  try {
    // The appid of the project created in dev center
    const appid = "2dd9588f-3635-44f1-85a1-09f06c0ed7e9";

    // Create the connector instance
    const connector = new TransgateConnect(appid);

    // Check if the TransGate extension is installed
    // If it returns false, please prompt to install it from chrome web store
    const isAvailable = await connector.isTransgateAvailable();

    if (isAvailable) {
      // The schema id of the project
      const schemaId = "33a9f82ad82047a8a2328a47601026fe";

      // Launch the process of verification
      // This method can be invoked in a loop when dealing with multiple schemas
      const res = await connector.launch(schemaId);

      // verifiy the res onchain/offchain based on the requirement
    } else {
      console.log("Please install TransGate");
    }
  } catch (error) {
    console.log("transgate error", error);
  }
};
