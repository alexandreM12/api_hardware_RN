import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import DeviceInfo from "react-native-device-info";

export default function App() {
  const [nivelBateria, setNivelBateria] = useState(null);

  useEffect(() => {
    const fetchBatteryLevel = async () => {
      const level = await DeviceInfo.getBatteryLevel();
      setNivelBateria(Math.floor(level * 100));
    };

    fetchBatteryLevel();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Nível da sua bateria: {nivelBateria}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
