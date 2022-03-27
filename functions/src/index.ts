import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

const config = functions.config();
admin.initializeApp(config.firebase);

const functionRegion = "australia-southeast1";

export const helloWorld = functions.region(functionRegion)
    .https.onRequest((request, response) => {
      functions.logger.info("Hello logs!", {structuredData: true});
      response.send("Hello from Firebase!");
    });

export const calculateRoi = functions.region(functionRegion)
    .firestore.document("sheets/{sheetId}").
    onCreate((snap, context) => {
      const {weeklyRent, sellingPrice} = snap.data();
      const roi = weeklyRent/sellingPrice;
      functions.logger
          .log("calculatingRoi", context.params.documentId, snap.data());
      return snap.ref.update({roi: roi});
    });
