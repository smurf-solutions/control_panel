"use strict";
var AppConfig = {};

AppConfig.Navigation = [
    {
        title: 'Base',
        icon: 'storage',
        children: [
            { title: 'Фактури',
                desc   : 'Преглед и редакция на Фактури',
                path   : 'Invoicing',
				module : 'invoicing'
            },
            { title: 'Клиенти',
                desc   : 'Управление на клиентите',
                path   : 'Customers',
				module : 'customers'
            },
            { title: 'Продукти',
                desc   : 'Управление на продуктите',
                path   : 'Store/Products',
				module : 'not-installed'
            },
            { title: 'Разходи*',
                desc: 'Разходни Фактури',
                path: 'Expences/Invoices'
            },
            { title: 'Доставчици*',
                desc: '',
                path: 'Contragents/Supplyers'
            },
            { title: 'Персонал*',
                desc: '',
                path: 'Employees/List'
            },
            { title: 'Автопарк*',
                desc: '',
                path: 'Automobiles'
            }
        ]
    },
    {
        title: 'Activity',
        icon: 'play_for_work',
        children: [
            { title: 'Хелпдеск',
                path: '/Helpdesk/Tickets'
            },
            { title: 'Продажби',
                desc: 'Управлениена продажбите',
                path: '/Invoicing/Sells'
            },
            { title: 'Покупки',
                desc: 'Управление на разходите',
                path: '/Expenses'
            },
            { title: 'Ремонти *',
                path: '/Transfers'
            },
            { title: 'Трансфери *',
                path: '/Transfers'
            },
            { title: 'Превози *',
                path: '/Prevoz'
            },
        ]
    },
    { title: 'Analyses',
        icon: 'trending_up',
        children: [
            { title: 'Търговски',
                path: '/Invoicing/Reports'
            },
            { title: 'Склад',
                path: '/Store/Reports'
            },
            { title: 'Персонал',
                path: '/Employees/Reports'
            }
        ]
    },
    {
        title: 'Admin',
        icon: 'tune',
        children: [
            { title: 'Потребители',
                path: '/Admin/Users'
            }
        ]
    }
];

AppConfig.Styles = [
    "css/themes/indigo-pink.min.css",
    "css/themes/indigo-pink.+.css",
    "css/table.data.css",
    "css/table.list.css",
    "app.component.css"
];


AppConfig.Routing = [
		{ path: '', redirectTo: '/Home', pathMatch: 'full' },
		{ path: 'Home', loadChildren: 'modules/home/home.module.js#HomeModule' },
	];
	AppConfig.Navigation.forEach( function( p ) {
		p.children.forEach( function( vv ) {
			if( vv.module ) {
				var className = '';
				vv.module.split('-').forEach( function( word ){	className += word.charAt(0).toUpperCase() + word.slice(1); })
				AppConfig.Routing.push( {
					path: vv.path,
					loadChildren: 'modules/' + vv.module + '/' + vv.module + '.module.js#' + className + 'Module'
				})
			}
		})
	});

