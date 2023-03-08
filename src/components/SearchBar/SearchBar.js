import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '@constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = ({
  searchFilter,
  setSearchFilter,
  searchValue,
  searchForValue,
  placeholder,
  filters,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Ionicons name="search" size={22} color={COLORS.red600} />
        <TextInput
          value={searchValue}
          onChangeText={text =>
            setSearchFilter({
              ...searchFilter,
              value: text,
            })
          }
          autoCapitalize="none"
          style={styles.input}
          placeholder={placeholder}
        />
      </View>
      <View style={styles.filterBar}>
        {filters?.map(item => (
          <TouchableOpacity
            onPress={() =>
              setSearchFilter({
                ...searchFilter,
                key: item.key,
              })
            }
            key={item.name}
            style={[
              styles.filterItem,
              item.key === searchFilter.key && styles.activeFilterItem,
            ]}>
            <Text style={styles.filterItemText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SearchBar;

const searchBarHeight = 44;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  wrapper: {
    height: searchBarHeight,
    backgroundColor: COLORS.white,
    borderStyle: 'solid',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    shadowOpacity: 0.2,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 22,
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    color: COLORS.black,
  },
  filterBar: {
    flexDirection: 'row',
    marginTop: 12,
  },
  filterItem: {
    marginHorizontal: 8,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 2,
    backgroundColor: COLORS.black,
  },
  filterItemText: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 14,
  },
  activeFilterItem: {
    backgroundColor: COLORS.red600,
  },
});
