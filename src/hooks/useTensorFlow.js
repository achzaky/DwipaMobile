import * as tf from "@tensorflow/tfjs";
import React from "react";
import modelJson from "../../assets/new_model/model.json";
import modelWeight from "../../assets/new_model/group1-shard.bin";
import { bundleResourceIO } from "@tensorflow/tfjs-react-native";

// export function useTensorFlowModel() {
//   const [model, setModel] = React.useState(null);

//   const isMounted = React.useRef(true);

//   React.useEffect(() => {
//     isMounted.current = true;
//     return () => (isMounted.current = false);
//   }, []);

//   React.useEffect(() => {
//     setModel(null);
//     tf.loadLayersModel(bundleResourceIO(modelJson, modelWeight)).then(
//       (model) => {
//         if (isMounted.current) {
//           setModel(model);
//         }
//       }
//     );
//   }, []);

//   return model;
// }

export function useTensorFlowLoaded() {
  const [isLoaded, setLoaded] = React.useState(false);
  const [model, setModel] = React.useState(null);

  const isMounted = React.useRef(true);

  React.useEffect(() => {
    isMounted.current = true;
    tf.ready().then(() => {
      if (isMounted.current) {
        console.log("tf ready");
        tf.loadGraphModel(bundleResourceIO(modelJson, modelWeight))
          .then((model) => {
            console.log("tf load");
            setModel(model);
          })
          .catch((error) => console.log("error", error));
        console.log("load true");
        setLoaded(true);
      }
    });
    return () => (isMounted.current = false);
  }, []);

  return { isLoaded, model };
}
