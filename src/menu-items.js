export default {
    items: [
        {
            id: 'navigation',
            type: 'group',
            icon: 'icon-navigation',
            role: 'Admin',
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
            role: 'Admin',
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
            role: 'Admin',
            children: [
                {
                    id: 'form-basic',
                    title: 'Öğrenciler',
                    type: 'item',
                    url: '/ogrenci/ogrenciler',
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'form-basic',
                    title: 'Toplantı İstekleri',
                    type: 'item',
                    url: '/ogrenci/toplanti-istekleri',
                    icon: 'feather icon-calendar'
                }
            ]
        },
        {
            id: 'ui-forms',
            title: 'Ödevler',
            type: 'group',
            icon: 'icon-group',
            role: 'Student',
            children: [
                {
                    id: 'bootstrap',
                    title: 'Ödevlerim',
                    type: 'item',
                    icon: 'feather icon-server',
                    url: '/odevler/odevlerim'
                }
            ]
        },
        {
            id: 'ui-forms',
            title: 'DUYURU',
            type: 'group',
            icon: 'icon-group',
            role: 'Admin',
            children: [
                {
                    id: 'form-basic',
                    title: 'Duyuru Gönder',
                    type: 'item',
                    url: '/duyuru/duyuru-gonder',
                    icon: 'feather icon-message-circle'
                }
            ]
        },
        
    ]
}