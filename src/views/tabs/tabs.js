import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabsHome from '../tabsHome/tabsHome';

const TabsNav = createBottomTabNavigator();

const Tabs = () => {
  return (
    <TabsNav.Navigator>
      <TabsNav.Screen name="tabsHome" component={TabsHome} />
      <TabsNav.Screen name="tabsHomes" component={TabsHome} />
    </TabsNav.Navigator>
  );
};

export default Tabs;
