import {groq} from 'next-sanity';

export const siteSettingsQuery = groq`
    *[_type == 'site-config'][0] {
        title,
        url,
        lang,
        logo{
        alt,
        asset->{url}
        },
        mainNavigation[]->{
        title,
        "slug": slug{current}
        },
        footerPhone,
        footerEmail,
        footerMail,
        footerText
    }
`;