import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Layout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: "#123041",
            tabBarInactiveTintColor: "#777",
           
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Entypo name="home" size={20} color={color} />
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "Sobre",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => <FontAwesome5 name="house-user" size={20} color={color} />


                }}
            />
            <Tabs.Screen
                name="contact"
                options={{
                    title: "Contato",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="contacts" size={20} color={color} />
                }}
            />


            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => <FontAwesome name="user-circle-o" size={24} color={color} />
                }}
            />

        </Tabs>
    )
}