//import liraries
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

type Props = {};

// create a component
const Sample = ({}: Props) => {
  const [data, setData] = useState<any>([]);

  return <View style={styles.container}></View>;
};

Sample.defaultProps = {};

//make this component available to the app
export default Sample;

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
