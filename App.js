/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import RN, {ScrollView, SectionList, Image, FlatList, Text, View} from 'react-native';

const style = RN.StyleSheet.create({
    box: {
        width: 150,
        height: 50,
        backgroundColor: '#ffeeff'
    },
    full: {
        flex: 1
    },
    images: {
        width: 300,
        height: 150
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
});


class List extends Component {
    render() {
        let sections = [
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
        ];

        return <SectionList
            sections={sections}
            renderItem={({item}) => <Text style={style.item} key={item}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={style.sectionHeader} key={section.title}>{section.title}</Text>}
        />
    }
}

export default class MyApp extends Component {
    render() {
        return <View style={style.full}>
                    <List />
                </View>
    }
}
