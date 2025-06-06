import DifficultyFilter from "@/component/DifficultyFilter";
import Line from "@/component/Line";
import Searchbar from "@/component/Searchbar";
import TripList from "@/component/TripList";
import trips from "@/data/trips";
import { Redirect } from "expo-router";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  const [search, setSearch] = useState("");
  const displayTrips = trips.filter((trip) =>
    trip.name.toLowerCase().includes(search.toLowerCase())
  );
  return <Redirect href="/trips/" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
});
