import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import React, { useState, useMemo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'
import Icons from '@expo/vector-icons/MaterialIcons'
import MasonryList from '@react-native-seoul/masonry-list'
import { BlurView } from 'expo-blur'

const AVATAR_URL = 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80'

const Categories = [
  "Clothing",
  "Shoes",
  "Accessories",
  "Bag",
  "Makeup"
]

const HomeScreen = () => {

  const { colors } = useTheme();

  const [categoryIndex, setCategoryIndex] = useState(0)

  return (
    <ScrollView>
      <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
        {/* header */}
        <View style={{ paddingHorizontal: 24, flexDirection: "row", alignItems: 'center', gap: 8 }}>
          <Image source={{ uri: AVATAR_URL, }}
            style={{ width: 52, aspectRatio: 1, borderRadius: 52 }}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 6, color: colors.text }} numberOfLines={1}>
              Hi, Faya!
            </Text>
            <Text style={{ color: colors.text, opacity: 0.75 }} numberOfLines={1}>
              Let's see what we got!
            </Text>
          </View>

          <TouchableOpacity style={{ width: 52, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 52, borderWidth: 1, borderColor: colors.border }}>
            <Icons name='notifications' size={20} color={colors.text} />
          </TouchableOpacity>
        </View>

        {/* search bar */}
        <View style={{ flexDirection: 'row', paddingHorizontal: 24, gap: 12 }}>
          <TouchableOpacity style={{ flex: 1, height: 52, borderRadius: 52, borderWidth: 1, borderColor: colors.border, alignItems: 'center', paddingHorizontal: 24, flexDirection: 'row', gap: 12 }}>
            <Icons name='search' size={24} color={colors.text} style={{ opacity: 0.5 }} />
            <Text style={{ flex: 1, fontSize: 16, color: colors.text, opacity: 0.5 }}>Search</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ width: 52, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 52, borderWidth: 1, backgroundColor: colors.primary }}>
            <Icons name='tune' size={20} color={colors.background} />
          </TouchableOpacity>
        </View>

        {/*new collection*/}
        <View style={{ paddingHorizontal: 24 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <Text style={{ fontWeight: '500', fontSize: 24 }}>New Collections</Text>
            <TouchableOpacity>
              <Text>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', height: 200, gap: 12 }}>
            <View style={{ flex: 1 }}>
              <Card />
            </View>
            <View style={{ flex: 1, gap: 12 }}>
              <Card />
              <Card />
            </View>
          </View>
        </View>

        {/* categories */}
        <FlatList
          data={Categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}
          renderItem={({ item, index }) => {
            const isSelected = categoryIndex === index;
            return (
              <TouchableOpacity
                onPress={() => setCategoryIndex(index)}
                style={{
                  backgroundColor: isSelected ? colors.primary : colors.card,
                  paddingHorizontal: 24,
                  paddingVertical: 16,
                  borderRadius: 100,
                  borderWidth: isSelected ? 0 : 1,
                  borderColor: colors.border,
                }}>
                <Text
                  style={{
                    color: isSelected ? colors.background : colors.text,
                    fontWeight: '600',
                    fontSize: 16,
                    opacity: isSelected ? 1 : 0.5,
                  }}
                >{item}</Text>
              </TouchableOpacity>
            )
          }}
        ></FlatList>


        {/* masonry or smt like that idk */}
        <MasonryList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          keyExtractor={(item): string => item}
          numColumns={2}
          contentContainerStyle={{
            paddingHorizontal: 24,
            alignSelf: 'stretch'
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }) => (
            <View
              style={{ aspectRatio: i === 0 ? 1 : 2 / 3, position: 'relative', overflow: 'hidden', marginTop: 12, borderRadius: 10 }}
            >
              <Image source={require("../../assets/kod.jpg")}
                resizeMode='cover'
                style={{
                  // flex: 1,
                  width: "100%",
                  height: "100%"
                }}
              // style={StyleSheet.absoluteFill}

              />
            </View>
          )}
          onEndReachedThreshold={0.1}
        >
        </MasonryList>

        <View style={{ paddingHorizontal: 24 }}>
          <View style={{ flexDirection: 'row', height: 200, gap: 16, marginVertical: 10 }}>
            <View style={{ flex: 1 }}>
              <Cards />
            </View>
            <View style={{ flex: 1 }}>
              <Cards />
            </View>
          </View>

          <View style={{ flexDirection: 'row', height: 200, gap: 16, marginVertical: 10 }}>
            <View style={{ flex: 1 }}>
              <Cards />
            </View>
            <View style={{ flex: 1 }}>
              <Cards />
            </View>
          </View>

          <View style={{ flexDirection: 'row', height: 200, gap: 16, marginVertical: 10 }}>
            <View style={{ flex: 1 }}>
              <Cards />
            </View>
            <View style={{ flex: 1 }}>
              <Cards />
            </View>
          </View>
        </View>
      </SafeAreaView >
    </ScrollView >
  )
}

export default HomeScreen

const Card = () => {
  return (
    <View style={{ flex: 1, position: "relative", overflow: 'hidden', borderRadius: 24 }}>
      <Image source={{ uri: "https://images.unsplash.com/photo-1593939202577-6bf5b21cb507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" }} resizeMode='cover' style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }} />

      <View style={{ position: 'absolute', left: 16, top: 16, paddingHorizontal: 14, paddingVertical: 10, backgroundColor: 'rgba(0,0,0,0.25)', borderRadius: 100 }}>
        <Text style={{ fontSize: 14, fontWeight: '500', color: "#fff" }}>$130</Text>
      </View>
    </View>
  )
}

const Cards = () => {
  return (
    <View style={{ flex: 1, position: "relative", overflow: 'hidden', borderRadius: 24 }}>
      <Image source={{ uri: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=404&q=80" }} resizeMode='cover' style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }} />

      <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between", alignContent: "center" }}>
        <View style={{
          flexDirection: 'row', gap: 10, position: "relative", marginHorizontal: 5, marginTop: 5, paddingVertical: 10, paddingHorizontal: 18, justifyContent: "space-evenly", alignContent: "center", backgroundColor: "rgba(255,255,255,0.5)", borderRadius: 100
        }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: '600', color: "#000", textAlign: "center" }}>No 5 Chanel</Text>
          </View>

          <TouchableOpacity style={{ aspectRatio: 1, justifyContent: "center", alignItems: "center" }}>
            <Icons name='favorite-border' size={30} color="#191919" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', marginHorizontal: 5, marginBottom: 5, paddingVertical: 10, paddingHorizontal: 18, borderRadius: 100, overflow: 'hidden' }}>
          <Text style={{ flex: 1, fontSize: 16, fontWeight: "600", color: '#fff' }}>$320.00</Text>

          <TouchableOpacity style={{ paddingHorizontal: 8, paddingVertical: 4, borderRadius: 100, borderWidth: 1, borderColor: '#fff' }}>
            <Icons name='add-shopping-cart' size={18} color='#fff' />
          </TouchableOpacity>
        </View>
      </View>

    </View >
  )
}


