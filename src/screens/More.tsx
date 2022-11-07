import { Linking } from 'react-native';
import { useTheme } from 'styled-components/native';
import { FormattedMessage } from 'react-intl';

import { useLocale } from '../context/locales';
import { LOCALE_EN, LOCALE_ID } from '../constants/locales';
import { BasicLayout } from '../layouts/Basic';
import { Box } from '../components/Box';
import { Item } from '../components/Item';

export function MoreScreen() {
  const theme = useTheme();
  const { localeEntry, setLocaleEntry } = useLocale();

  const setEnglishLocale = () => {
    setLocaleEntry(LOCALE_EN);
  };

  const setIndonesianLocale = () => {
    setLocaleEntry(LOCALE_ID);
  };

  const sendMail = () => {
    Linking.openURL('mailto:deniandreawan0@gmail.com');
  };

  const openMyWebsite = () => {
    Linking.openURL('https://deniandreawan.vercel.app');
  };

  return (
    <BasicLayout>
      <Box mx={theme.space.md}>
        <Item
          items={[
            {
              isCheckable: true,
              name: <FormattedMessage id="more.languages.en" />,
              onPress: setEnglishLocale,
              isChecked: localeEntry === LOCALE_EN,
              key: 'language_en'
            },
            {
              isCheckable: true,
              name: <FormattedMessage id="more.languages.id" />,
              onPress: setIndonesianLocale,
              isChecked: localeEntry === LOCALE_ID,
              key: 'language_id'
            }
          ]}
          title={<FormattedMessage id="more.languages.title" />}
        />
        <Item
          mt="lg"
          items={[
            {
              name: <FormattedMessage id="more.author.me.title" />,
              description: <FormattedMessage id="more.author.me.description" />,
              key: 'author_me',
              icon: 'smile',
              onPress: openMyWebsite
            },
            {
              name: <FormattedMessage id="more.author.contactMe.title" />,
              description: (
                <FormattedMessage id="more.author.contactMe.description" />
              ),
              key: 'author_contact',
              icon: 'mail',
              onPress: sendMail
            }
          ]}
          title={<FormattedMessage id="more.author.title" />}
        />
        <Item
          mt="lg"
          items={[
            {
              name: <FormattedMessage id="more.sources.themoviedb.title" />,
              description: (
                <FormattedMessage id="more.sources.themoviedb.description" />
              ),
              key: 'themoviedb',
              icon: 'bookmark'
            },
            {
              name: <FormattedMessage id="more.sources.appIcon.title" />,
              description: (
                <FormattedMessage id="more.sources.appIcon.description" />
              ),
              key: 'app_icon',
              icon: 'bookmark'
            }
          ]}
          title={<FormattedMessage id="more.sources.title" />}
        />
      </Box>
    </BasicLayout>
  );
}
