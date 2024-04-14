import * as React from 'react';
import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Location({ navigation }: { navigation: any }) {
    const [selectedPark, setSelectedPark] = React.useState('');
    const renderContactInfo = () => {
        switch (selectedPark) {
            case 'acadianp':
                return (
                    <View>
                        <Text>Contact Info for Acadia National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'archesnp':
                return (
                    <View>
                        <Text>Contact Info for Arches National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'badlandsnp':
                return (
                    <View>
                        <Text>Contact Info for Badlands National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'bigbendnp':
                return (
                    <View>
                        <Text>Contact Info for Big Bend National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'biscaynenp':
                return (
                    <View>
                        <Text>Contact Info for Biscayne National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'blackcanyonnp':
                return (
                    <View>
                        <Text>Contact Info for Black Canyon of the Gunnison National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'brycenp':
                return (
                    <View>
                        <Text>Contact Info for Bryce Canyon National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'canyonlandsnp':
                return (
                    <View>
                        <Text>Contact Info for Canyonlands National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'capitolreefnp':
                return (
                    <View>
                        <Text>Contact Info for Capitol Reef National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'carlsbadcavernsnp':
                return (
                    <View>
                        <Text>Contact Info for Carlsbad Caverns National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'channelislandsnp':
                return (
                    <View>
                        <Text>Contact Info for Channel Islands National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'congareenp':
                return (
                    <View>
                        <Text>Contact Info for Congaree National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'craterlakenp':
                return (
                    <View>
                        <Text>Contact Info for Crater Lake National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'cuyahogavalleynp':
                return (
                    <View>
                        <Text>Contact Info for Cuyahoga Valley National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'deathvalleynp':
                return (
                    <View>
                        <Text>Contact Info for Death Valley National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'denalinp':
                return (
                    <View>
                        <Text>Contact Info for Denali National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'drytortugasnp':
                return (
                    <View>
                        <Text>Contact Info for Dry Tortugas National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'evergladesnp':
                return (
                    <View>
                        <Text>Contact Info for Everglades National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'gatesofthearcticnp':
                return (
                    <View>
                        <Text>Contact Info for Gates of the Arctic National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'gatewayarchnp':
                return (
                    <View>
                        <Text>Contact Info for Gateway Arch National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'glacierbaynp':
                return (
                    <View>
                        <Text>Contact Info for Glacier Bay National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'glaciernp':
                return (
                    <View>
                        <Text>Contact Info for Glacier National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'grandcanyonnp':
                return (
                    <View>
                        <Text>Contact Info for Grand Canyon National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'grandtetonn':
                return (
                    <View>
                        <Text>Contact Info for Grand Teton National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'greatbasinnp':
                return (
                    <View>
                        <Text>Contact Info for Great Basin National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'greatsanddunesnp':
                return (
                    <View>
                        <Text>Contact Info for Great Sand Dunes National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'greatsmokymountainsnp':
                return (
                    <View>
                        <Text>Contact Info for Great Smoky Mountains National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'guadalupemountainsnp':
                return (
                    <View>
                        <Text>Contact Info for Guadalupe Mountains National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'haleakalanp':
                return (
                    <View>
                        <Text>Contact Info for Haleakalā National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'hawaiivolcanoesnp':
                return (
                    <View>
                        <Text>Contact Info for Hawai'i Volcanoes National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'hotspringsnp':
                return (
                    <View>
                        <Text>Contact Info for Hot Springs National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'indianadunesnp':
                return (
                    <View>
                        <Text>Contact Info for Indiana Dunes National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'isleroyalnp':
                return (
                    <View>
                        <Text>Contact Info for Isle Royale National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'joshuatreenp':
                return (
                    <View>
                        <Text>Contact Info for Joshua Tree National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'katmainp':
                return (
                    <View>
                        <Text>Contact Info for Katmai National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'kenaifjordsnp':
                return (
                    <View>
                        <Text>Contact Info for Kenai Fjords National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'kingscanyonnp':
                return (
                    <View>
                        <Text>Contact Info for Kings Canyon National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'kobukvalleynp':
                return (
                    <View>
                        <Text>Contact Info for Kobuk Valley National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'lakeclarknp':
                return (
                    <View>
                        <Text>Contact Info for Lake Clark National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'lassenvolcanicnp':
                return (
                    <View>
                        <Text>Contact Info for Lassen Volcanic National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'mammothcavenp':
                return (
                    <View>
                        <Text>Contact Info for Mammoth Cave National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'mesaverdenp':
                return (
                    <View>
                        <Text>Contact Info for Mesa Verde National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'mountrainiernp':
                return (
                    <View>
                        <Text>Contact Info for Mount Rainier National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'americansamoanp':
                return (
                    <View>
                        <Text>Contact Info for National Park of American Samoa</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'newrivergorgenp':
                return (
                    <View>
                        <Text>Contact Info for New River Gorge National Park and Preserve</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'northcascadesnp':
                return (
                    <View>
                        <Text>Contact Info for North Cascades National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'olympicnp':
                return (
                    <View>
                        <Text>Contact Info for Olympic National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'petrifiedforestnp':
                return (
                    <View>
                        <Text>Contact Info for Petrified Forest National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'pinnaclesnp':
                return (
                    <View>
                        <Text>Contact Info for Pinnacles National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'redwoodnp':
                return (
                    <View>
                        <Text>Contact Info for Redwood National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'rockymountainnp':
                return (
                    <View>
                        <Text>Contact Info for Rocky Mountain National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'saguaronp':
                return (
                    <View>
                        <Text>Contact Info for Saguaro National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'sequoianp':
                return (
                    <View>
                        <Text>Contact Info for Sequoia National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'shenandoahnp':
                return (
                    <View>
                        <Text>Contact Info for Shenandoah National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'theodorerooseveltnp':
                return (
                    <View>
                        <Text>Contact Info for Theodore Roosevelt National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'virginislandsnp':
                return (
                    <View>
                        <Text>Contact Info for Virgin Islands National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'voyageursnp':
                return (
                    <View>
                        <Text>Contact Info for Voyageurs National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'whitesandsnp':
                return (
                    <View>
                        <Text>Contact Info for White Sands National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'windcavenp':
                return (
                    <View>
                        <Text>Contact Info for Wind Cave National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'wrangellsteliasnp':
                return (
                    <View>
                        <Text>Contact Info for Wrangell-St. Elias National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'yellowstonenp':
                return (
                    <View>
                        <Text>Contact Info for Yellowstone National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'yosemitenp':
                return (
                    <View>
                        <Text>Contact Info for Yosemite National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            case 'zionnp':
                return (
                    <View>
                        <Text>Contact Info for Zion National Park</Text>
                        {/* Ranger: */}
                        {/* Email: */}
                        {/* Phone: */}
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Location!</Text>
            <Picker
                selectedValue={selectedPark}
                onValueChange={(itemValue) => setSelectedPark(itemValue)}
            >
                <Picker.Item label="Acadia National Park, Maine" value="acadianp" />
                <Picker.Item label="Arches National Park, Utah" value="archesnp" />
                <Picker.Item label="Badlands National Park, South Dakota" value="badlandsnp" />
                <Picker.Item label="Big Bend National Park, Texas" value="bigbendnp" />
                <Picker.Item label="Biscayne National Park, Florida" value="biscaynenp" />
                <Picker.Item label="Black Canyon of the Gunnison National Park, Colorado" value="blackcanyonnp" />
                <Picker.Item label="Bryce Canyon National Park, Utah" value="brycenp" />
                <Picker.Item label="Canyonlands National Park, Utah" value="canyonlandsnp" />
                <Picker.Item label="Capitol Reef National Park, Utah" value="capitolreefnp" />
                <Picker.Item label="Carlsbad Caverns National Park, New Mexico" value="carlsbadcavernsnp" />
                <Picker.Item label="Channel Islands National Park, California" value="channelislandsnp" />
                <Picker.Item label="Congaree National Park, South Carolina" value="congareenp" />
                <Picker.Item label="Crater Lake National Park, Oregon" value="craterlakenp" />
                <Picker.Item label="Cuyahoga Valley National Park, Ohio" value="cuyahogavalleynp" />
                <Picker.Item label="Death Valley National Park, California and Nevada" value="deathvalleynp" />
                <Picker.Item label="Denali National Park, Alaska" value="denalinp" />
                <Picker.Item label="Dry Tortugas National Park, Florida" value="drytortugasnp" />
                <Picker.Item label="Everglades National Park, Florida" value="evergladesnp" />
                <Picker.Item label="Gates of the Arctic National Park, Alaska" value="gatesofthearcticnp" />
                <Picker.Item label="Gateway Arch National Park, Missouri and Illinois" value="gatewayarchnp" />
                <Picker.Item label="Glacier Bay National Park, Alaska" value="glacierbaynp" />
                <Picker.Item label="Glacier National Park, Montana" value="glaciernp" />
                <Picker.Item label="Grand Canyon National Park, Arizona" value="grandcanyonnp" />
                <Picker.Item label="Grand Teton National Park, Wyoming" value="grandtetonn" />
                <Picker.Item label="Great Basin National Park, Nevada" value="greatbasinnp" />
                <Picker.Item label="Great Sand Dunes National Park, Colorado" value="greatsanddunesnp" />
                <Picker.Item label="Great Smoky Mountains National Park, North Carolina and Tennessee" value="greatsmokymountainsnp" />
                <Picker.Item label="Guadalupe Mountains National Park, Texas" value="guadalupemountainsnp" />
                <Picker.Item label="Haleakalā National Park, Hawaii" value="haleakalanp" />
                <Picker.Item label="Hawai'i Volcanoes National Park, Hawaii" value="hawaiivolcanoesnp" />
                <Picker.Item label="Hot Springs National Park, Arkansas" value="hotspringsnp" />
                <Picker.Item label="Indiana Dunes National Park, Indiana" value="indianadunesnp" />
                <Picker.Item label="Isle Royale National Park, Michigan" value="isleroyalnp" />
                <Picker.Item label="Joshua Tree National Park, California" value="joshuatreenp" />
                <Picker.Item label="Katmai National Park, Alaska" value="katmainp" />
                <Picker.Item label="Kenai Fjords National Park, Alaska" value="kenaifjordsnp" />
                <Picker.Item label="Kings Canyon National Park, California" value="kingscanyonnp" />
                <Picker.Item label="Kobuk Valley National Park, Alaska" value="kobukvalleynp" />
                <Picker.Item label="Lake Clark National Park, Alaska" value="lakeclarknp" />
                <Picker.Item label="Lassen Volcanic National Park, California" value="lassenvolcanicnp" />
                <Picker.Item label="Mammoth Cave National Park, Kentucky" value="mammothcavenp" />
                <Picker.Item label="Mesa Verde National Park, Colorado" value="mesaverdenp" />
                <Picker.Item label="Mount Rainier National Park, Washington" value="mountrainiernp" />
                <Picker.Item label="National Park of American Samoa, American Samoa" value="american samoanp" />
                <Picker.Item label="New River Gorge National Park and Preserve, West Virginia" value="newrivergorgenp" />
                <Picker.Item label="North Cascades National Park, Washington" value="northcascadesnp" />
                <Picker.Item label="Olympic National Park, Washington" value="olympicnp" />
                <Picker.Item label="Petrified Forest National Park, Arizona" value="petrifiedforestnp" />
                <Picker.Item label="Pinnacles National Park, California" value="pinnaclesnp" />
                <Picker.Item label="Redwood National Park, California" value="redwoodnp" />
                <Picker.Item label="Rocky Mountain National Park, Colorado" value="rockymountainnp" />
                <Picker.Item label="Saguaro National Park, Arizona" value="saguaronp" />
                <Picker.Item label="Sequoia National Park, California" value="sequoianp" />
                <Picker.Item label="Shenandoah National Park, Virginia" value="shenandoahnp" />
                <Picker.Item label="Theodore Roosevelt National Park, North Dakota" value="theodorerooseveltnp" />
                <Picker.Item label="Virgin Islands National Park, Virgin Islands" value="virginislandsnp" />
                <Picker.Item label="Voyageurs National Park, Minnesota" value="voyageursnp" />
                <Picker.Item label="White Sands National Park, New Mexico" value="whitesandsnp" />
                <Picker.Item label="Wind Cave National Park, South Dakota" value="windcavenp" />
                <Picker.Item label="Wrangell-St. Elias National Park, Alaska" value="wrangellsteliasnp" />
                <Picker.Item label="Yellowstone National Park, Idaho, Montana, and Wyoming" value="yellowstonenp" />
                <Picker.Item label="Yosemite National Park, California" value="yosemitenp" />
                <Picker.Item label="Zion National Park, Utah" value="zionnp" />
            </Picker>
            {renderContactInfo()}
        </View>
    );
}