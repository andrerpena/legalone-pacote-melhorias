$(".main-bar")
    .before(`<div class='side-bar side-bar-left'>
                <div id='vnav-container'>
                    <div>
                        <div class='search-wrapper'>
                            <input type="text" v-model="searchTerm" v-on:keyup="search" class="vnav-input" placeholder="Pesquisa no menu"/>
                        </div>
                        <vnav :menu="menu"/>
                    </div>
                </div>
            </div>`);

function clone(item) {
    if (!item) {
        return item;
    } // null, undefined values check

    var types = [Number, String, Boolean],
        result;

    // normalizing primitives if someone did new String('aaa'), or new Number('444');
    types.forEach(function (type) {
        if (item instanceof type) {
            result = type(item);
        }
    });

    if (typeof result == "undefined") {
        if (Object.prototype.toString.call(item) === "[object Array]") {
            result = [];
            item.forEach(function (child, index, array) {
                result[index] = clone(child);
            });
        } else if (typeof item == "object") {
            // testing that this is DOM
            if (item.nodeType && typeof item.cloneNode == "function") {
                var result = item.cloneNode(true);
            } else if (!item.prototype) { // check that this is a literal
                if (item instanceof Date) {
                    result = new Date(item);
                } else {
                    // it is an object literal
                    result = {};
                    for (var i in item) {
                        result[i] = clone(item[i]);
                    }
                }
            } else {
                // depending what you would like here,
                // just keep the reference, or create new object
                if (false && item.constructor) {
                    // would not advice to do that, reason? Read below
                    result = new item.constructor();
                } else {
                    result = item;
                }
            }
        } else {
            result = item;
        }
    }

    return result;
}

var menu = [
    {
        displayName: 'Contatos',
        url: '/contatos',
        menu: [
            {
                displayName: 'Painel',
                url: '/contatos',
                menu: [
                    {
                        displayName: 'Alterar painel',
                        url: '/config/widgets/edit/contatos?returnUrl=%2Fcontatos'
                    }
                ]
            },
            {
                displayName: 'Contatos',
                url: '/contatos/contatos/search'
            },
            {
                displayName: 'Relatórios',
                url: '/contatos/reportcontatos'
            }
        ]
    },
    {
        displayName: 'Agenda',
        url: '/agenda/compromissotarefa',
        menu: [
            {
                displayName: 'Painel',
                url: '/agenda'
            },
            {
                displayName: 'Compromissos e tarefas',
                url: '/agenda/compromissotarefa'
            },
            {
                displayName: 'Agenda do escritório',
                url: '/agenda/AgendaEscritorio'
            },
            {
                displayName: 'Relatórios',
                url: '/agenda/reportagenda'
            }
        ]
    },
    {
        displayName: 'Processos',
        url: '/processos',
        menu: [
            {
                displayName: 'Painel',
                url: '/processos'
            },
            {
                displayName: 'Pastas',
                url: '/processos/processos/search'
            },
            {
                displayName: 'Casos',
                url: '/processos/casos'
            },
            {
                displayName: 'Relatórios',
                url: '/processos/reportprocessos'
            }
        ]
    },
    {
        displayName: 'Serviços',
        menu: [
            {
                displayName: 'Painel',
                url: '/servicos'
            },
            {
                displayName: 'Pastas',
                url: '/servicos/servicos/search'
            },
            {
                displayName: 'Relatórios',
                url: '/servicos/reportservicos'
            }
        ]
    },
    {
        displayName: 'Contratos',
        url: '/contratos/contratocliente',
        menu: [
            {
                displayName: 'Painel',
                url: '/contratos'
            },
            {
                displayName: 'Contratos de cliente',
                url: '/contratos/contratocliente'
            },
            {
                displayName: 'Contratos de honorário',
                url: '/contratos/contratos'
            },
            {
                displayName: 'Relatórios',
                url: '/contratos/reportcontratos'
            }
        ]
    },
    {
        displayName: 'Financeiro',
        url: '/financeiro/obrigacoes/Search',
        menu: [
            {
                displayName: 'Painel',
                url: '/financeiro'
            },
            {
                displayName: 'Contas a pagar e receber',
                url: '/financeiro/obrigacoes/Search'
            },
            {
                displayName: 'Fluxo de caixa',
                url: '/financeiro/movimentos/search'
            },
            {
                displayName: 'Inadimplência',
                url: '/financeiro/Inadimplencias/search'
            },
            {
                displayName: 'Solicitações',
                url: '/financeiro/Solicitacoes/search'
            },
            {
                displayName: 'Conciliação',
                url: '/financeiro/Conciliacao/search'
            },
            {
                displayName: 'Análises',
                url: '/financeiro/analises'
            },
            {
                displayName: 'Relatórios',
                url: '/financeiro/ReportFinanceiro'
            }
        ]
    },
    {
        displayName: 'Faturamento',
        url: '/faturamento/itemfaturavel/search',
        menu: [
            {
                displayName: 'Painel',
                url: '/faturamento/HomeFaturamento/Index'
            },
            {
                displayName: 'Itens faturáveis',
                url: '/faturamento/itemfaturavel/search'
            },
            {
                displayName: 'Emissão',
                url: '/faturamento/emissao/search'
            },
            {
                displayName: 'Emitidas',
                url: '/faturamento/emitida/search'
            },
            {
                displayName: 'Relatórios',
                url: '/faturamento/ReportFaturamento/index'
            }
        ]
    },
    {
        displayName: 'Boletos',
        url: '/boletos',
        menu: [
            {
                displayName: 'Painel',
                url: '/boletos/HomeBoleto/Index'
            },
            {
                displayName: 'Emissão',
                url: '/boletos'
            },
            {
                displayName: 'Emitidos',
                url: '/boletos/Emitidos'
            },
            {
                displayName: 'Conciliação',
                url: '/boletos/ConciliacaoBoleto'
            },
            {
                displayName: 'Relatórios',
                url: '/boletos/ReportBoleto/index'
            }
        ]
    },
    {
        displayName: 'GED',
        url: '/GED/HomeGED',
        menu: [
            {
                displayName: 'Painel',
                url: '/GED/HomeGED'
            },
            {
                displayName: 'Arquivos',
                url: '/GED/GEDArquivos/Search'
            },
            {
                displayName: 'Gerador de documentos',
                url: '/GED/GeradorDocumentos/Search'
            },
            {
                displayName: 'Relatórios',
                url: '/GED/ReportGED'
            }
        ]
    },
    {
        displayName: 'Acervo jurídico',
        url: '/acervojuridico/acervojuridico/search',
        menu: [
            {
                displayName: 'Revista dos Tribunais Online',
                url: '/acervojuridico/acervojuridico/search'
            }
        ]
    },
    {
        displayName: 'Time Sheet',
        url: '/TimeSheet/HorasTrabalhadas/Search',
        menu: [
            {
                displayName: 'Painel',
                url: '/TimeSheet/HomeTimeSheet'
            },
            {
                displayName: 'Horas trabalhadas',
                url: '/TimeSheet/HorasTrabalhadas/Search'
            },
            {
                displayName: 'Análises',
                url: '/TimeSheet/analises'
            },
            {
                displayName: 'Relatórios',
                url: '/TimeSheet/ReportTimeSheet'
            }
        ]
    },
    {
        displayName: 'Workflow',
        url: 'https://workflow.novajus.com.br/'
    },
    {
        displayName: 'Mesas de trabalho',
        url: '/MesasTrabalho'
    },
    {
        displayName: 'Opções',
        url: '/config/ferramentas',
        menu: [
            {
                displayName: 'Ferramentas',
                url: '/config/ferramentas'
            },
            {
                displayName: 'Configurações',
                url: '/config/configuracoes'
            },
            {
                displayName: 'Tabelas de sistema',
                url: '/config/TabelasSistema'
            },
            {
                displayName: 'Controle de acesso',
                url: '/config/CA'
            },
            {
                displayName: 'Usuários',
                url: '/config/usuarios'
            },
            {
                displayName: 'Escritórios associados',
                url: '/config/EscritorioAssociado'
            },
            {
                displayName: 'Personalizações',
                url: '/Personalizacoes/Modulos/Search'
            },
            {
                displayName: 'Listas em Excel',
                url: '/config/reportconfig/search'
            },
            {
                displayName: 'Manuais',
                url: '/config/Manuais'
            },
            {
                displayName: 'Sobre',
                url: '/config/Sobre'
            }
        ]
    }
];

Vue.component('vnav', {
    template: `<ul>
            <li v-for="menuItem in menu">
                <a v-bind:href="menuItem.url" class="vnav-link" >{{ menuItem.displayName }}</a>
                <vnav v-if="menuItem.menu" :menu="menuItem.menu"/>
            </li>
        </ul>`,
    props: {
        menu: Array,
    }
});

new Vue({
    el: '#vnav-container',
    data: {
        searchTerm: '',
        menu: clone(menu)
    },
    methods: {
        filterMenuItems: function (menuItems, term) {
            var result = [];
            for (var i = 0; i < menuItems.length; i++) {
                var filteredMenuItem = this.filterMenuItem(menuItems[i], term);
                if (filteredMenuItem)
                    result.push(filteredMenuItem);
            }
            return result;
        },
        filterMenuItem: function (menuItem, term) {
            if (menuItem.displayName.match(new RegExp(term, 'i'))) {
                return menuItem;
            }
            else if (menuItem.menu) {
                var filteredChildren = this.filterMenuItems(menuItem.menu, term);
                if (filteredChildren.length) {
                    menuItem.menu = filteredChildren;
                    return menuItem;
                }
            }
            return null;
        },
        search: function () {
            this.menu = this.filterMenuItems(clone(menu), this.searchTerm)
        }
    }
});
