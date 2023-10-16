import React, { useState } from "react";
import { View, Text, TextInput, Image, Pressable } from "react-native";
import {ClockLoader} from "react-spinners";

const FinalConfirmation = ({
  setStep,
  poNumber,
  setPONumber,
  signInData,
  setSignInData,
  verifiedAppointment,
  setVerifiedAppointment,
}) => {
  const [readyToLoad, setReadyToLoad] = useState(false);

  const handleConfirm = async () => {
    console.log("confirmed");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Image
        source={require("../assets/logo.png")}
        style={{
          height: "80px",
          width: "370px",
          marginBottom: 50,
          borderRadius: "5px ",
        }}
      />
      <Text style={{ fontSize: 36, marginBottom: 20, fontWeight: "bold" }}>
        You're checked in, {signInData.name}!
      </Text>

      <Text style={{ fontSize: 24, marginBottom: 20, width: "90%" }}>
        Please wait for an assigned dock door. For now, please park in the
        staging area, set your refer to 34 degrees (continuous), and set your
        tandems. When a door is assigned, please chock your tires, pull your
        airhose, and open your trailer door.
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: 300,
        }}
      >
        {readyToLoad ? (
          <Pressable
            onPress={handleConfirm}
            color="darkgreen" // Change the color to a different one
            style={{
              width: "45%",
              height: 60,
              fontSize: 24,
              backgroundColor: "darkgreen",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
              color: "white",
            }}
          >
            <Text style={{ color: "white", fontSize: 24 }}>Confirm</Text>
          </Pressable>
        ) : (
          <ClockLoader size="75" />
        )}
      </View>
    </View>
  );
};

export default FinalConfirmation;
