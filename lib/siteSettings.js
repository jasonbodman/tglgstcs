import {groq} from 'next-sanity';

export const siteSettingsQuery = groq`
    *[_type == 'site-config'][0] {
        title,
        url,
        lang,
        logo{
            ...,
            asset->{url}
        },
        favicon{
            ...,
            asset->{url}
        },
        mainNavigation[]->{
        title,
        "slug": slug{current}
        },
        contactFormIntro,
        footerPhone,
        footerEmail,
        footerMail,
        footerText
    }
`;