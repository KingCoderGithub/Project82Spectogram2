import React, { Component } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RFValue from 'react-native-responsive-RFvalue'


render(){
    return(
        <View style={styles.container}> 
        <View style={styles.cardContainer}>
        <View style={styles.authorContainer}> 
        <Image 
        source={require("../assets/profile_img.png")}
        style={style.profileImage}
        >
        </Image>
        </View>
        <View style={styles.authorNameContainer}> 
        <Text style={styles.authorNameText}>{this.props.post.author}
        </Text>
        </View>
        </View>
        <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
        <View style={styles.captionContainer}> 
        <Text style={styles.captionText}>
            {this.props.post.caption}
        </Text>
        </View>
        <View style={styles.actionContainer}>
        <View style={styles.likeButton}>
        <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
        <Text style={styles.likeText}> 12k </Text>
        </View>
        </View>
        
        </View>
    )
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    droidSafeArea : {
        marginTop : Platform.OS === "android" ? StatusBar.correntHeight : RFValue(35)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage : {
        width: "100%",
        height: "100%",
        resizeMode : "contain"
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28)
    },
    cardContainer: {
        flex: 0.85
    }
})