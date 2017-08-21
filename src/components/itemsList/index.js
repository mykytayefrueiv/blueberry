import React, {Component} from 'react';
import map from 'lodash/map';
import Card from '../Card/card';
import img from '../offers/top_sells.jpg';
import './styles.css';

import acrilyc from './images/acrilyc.jpg';
import lamp from './images/lamp_red.jpg';
import chameleons from './images/chameleons.jpg';

class ItemsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsToShow: [
                {
                    name: 'Мономер для акриловой пудры 58мл',
                    category: 'Жидкости',
                    price: '90',
                    image: acrilyc
                },
                {
                    name: 'Лампа красная 48ватт (гель, акрилл, шекллак)',
                    category: 'снтрументы',
                    price: '250',
                    image: lamp
                }, {
                    name: 'Хамелеоны микс размеров. Упаковка 1440шт',
                    category: 'Декор',
                    price: '100',
                    image: chameleons
                },
                {
                    name: 'Набор для покраски Estel (миска, кисть, пресс-ключ)',
                    category: 'Инструменты, фрезеры',
                    price: '100'
                },
                {
                    name: 'Кристалы пикси',
                    category: 'Стразы, стекло',
                    price: '90'
                },
                {
                    name: 'Конфетти',
                    category: 'Декор, конфетти',
                    price: '25',
                    discountPrice: '10'
                }, {
                    name: 'Типсы на лак',
                    category: 'Типсы',
                    price: '1'
                },
                {
                    name: 'Набор для покраски Estel (миска, кисть, пресс-ключ)',
                    category: 'Инструменты, фрезеры',
                    price: '100'
                }
            ]
        }
    }

    renderPrice(item) {
        if (!item.discountPrice) {
            return <span className="price">{item.price}₴</span>
        }
        return <div className="price-container">
            <span className="previous-price">{item.price}₴</span>
            <span className="price">{item.discountPrice}₴</span>
        </div>
    }

    renderCart() {
        return <i className="material-icons cart">add_shopping_cart</i>;
    }

    render() {
        return (
            <div className="items-container">
                {map(this.state.itemsToShow, (item, i) =>
                    <Card
                        title={item.name}
                        key={i}
                        image={item.image ? item.image : img}
                        leftBottomComponent={this.renderPrice(item)}
                        rightBottomComponent={this.renderCart(item)}
                    />
                )}
            </div>
        );
    }
}

export default ItemsList;