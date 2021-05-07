export default {
    items: [
        {
            id: 'navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Anasayfa',
                    type: 'item',
                    url: '/anasayfa',
                    icon: 'feather icon-home',
                }
            ]
        },
        {
            id: 'ui-forms',
            title: 'Ödev',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'form-basic',
                    title: 'Ödev Oluştur',
                    type: 'item',
                    url: '/odev/odev-olustur',
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'bootstrap',
                    title: 'Ödevler',
                    type: 'item',
                    icon: 'feather icon-server',
                    url: '/odev/odevler'
                }
            ]
        },
        {
            id: 'ui-forms',
            title: 'ÖĞRENCİ',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'form-basic',
                    title: 'Öğrenciler',
                    type: 'item',
                    url: '/ogrenci/ogrenciler',
                    icon: 'feather icon-file-text'
                }
            ]
        }
    ]
}