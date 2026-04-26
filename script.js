const RoastTypes = {
    NATURAL: "Натуральный",
    WASHED: "Мытый"
}

const RoastDarkness = {
    FILTER: "Фильтр",
    ESPRESSO: "Эспрессо"
}

var CartContents = {}

class Product {
    name;
    price;
    description;
    rating;
    roast_darkness;
    roast_type;
    img;
    link;

    constructor(name, price, rating, roast_darkness, roast_type, description, img, link) {
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.roast_type = roast_type;
        this.roast_darkness = roast_darkness;
        this.description = description;
        this.img = img;
        this.link = link;
    }
}

const products = [
    new Product(
        "Бразилия Суль-де-Минас",
        99.99,
        82,
        RoastDarkness.FILTER,
        RoastTypes.NATURAL,
        `
        Бразилия Суль-де-Минас — базовый сорт для фильтра из региона
        Суль-де-Минас, одного из трёх основных кофепроизводящих регионов
        Бразилии наряду с Серрадо и Можиана. Этот кофе есть в нашем ассортименте
        круглый год, поэтому лоты в его составе могут периодически меняться. Но
        мы стараемся подбирать их так, чтобы сохранять вкусовой профиль
        максимально похожим, однородным и комплексным. Так же мы используем этот
        кофе не только как моносорт для фильтра, но и как основу для большинства
        эспрессо-смесей, потому что это очень стабильный кофе.
        `,
        "./img/sul_de_minas.png",
        "./products/sul_de_minas.html"
    ),
    new Product(
        "Эфиопия Иргачефф",
        119.99,
        83,
        RoastDarkness.ESPRESSO,
        RoastTypes.NATURAL,
        `
        Сладкий кофе с нотами тёмных ягод, цитрусов и молочного шоколада.
        Эфиопия Иргачефф — один из базовых и популярных моносортов в обжарке под
        эспрессо в нашем ассортименте. Лоты в его составе могут периодически
        меняться, но мы стараемся подбирать их так, чтобы сохранять вкусовой
        профиль — с высокой сладостью и сбалансированной, не слишком высокой
        кислотностью. Также он отлично сочетается с молоком, а в капучино даёт
        вкус ягодного йогурта с шоколадными нотами. В Эфиопии существует
        несколько зон выращивания кофе, основными из которых являются Иргачефф,
        Сидамо, Харрар, Лиму и Джимма. Вкус в каждом из этих регионов отличается
        из-за различий микроклимата, особенностей ландшафта, а также местных
        разновидностей кофе.
        `,
        "./img/irgacheff.png",
        "./products/irgacheff.html",
    ),
    new Product(
        "Бразилия Серрадо",
        109.99,
        82,
        RoastDarkness.ESPRESSO,
        RoastTypes.NATURAL,
        `
        Базовый сорт для эспрессо натуральной обработки из региона Серрадо —
        одного из трёх основных кофепроизводящих регионов Бразилии наряду с
        Суль-де-Минас и Можиана. Регион Серрадо известен своими плоскими
        равнинами, средней высотой произрастания от 800 до 1100 метров над
        уровнем моря, а ещё тем, что почвы здесь обогащают органическими
        удобрениями. Для этого сорта смешаны лоты от разных фермеров со всего
        региона, которые могут меняться в течение года. Но мы стараемся
        подбирать их так, чтобы сохранять вкусовой профиль максимально похожим,
        однородным и комплексным.
        `,
        "./img/serrado.png",
        "./products/serrado.html",
    ),
    new Product(
        "Колумбия Богота",
        89.99,
        84,
        RoastDarkness.ESPRESSO,
        RoastTypes.WASHED,
        `
        Сочный кофе с нотами тёмного винограда, красного яблока и тёмного
        шоколада. Колумбия Богота — базовый и постоянный кофе в нашем
        ассортименте. Лоты в его составе могут периодически меняться, но мы
        стараемся подбирать их так, чтобы в течение всего года сохранять его
        классический фруктовый профиль с сочной кислотностью во вкусе.
        `,
        "./img/bogota.png",
        "./products/botota.html"
    )
]

const products_container = document.getElementById("products_container")
const col_width = 3;

function build_products(container, products) {
    const rowElement = document.createElement('div')
    rowElement.classList = 'row align-items-start'

    for (p in products) {
        const product = products[p]
        const p_id = p
        const productContainer = document.createElement('div')
        productContainer.classList = `col-${col_width} card m-3`
        const productImage = document.createElement('img')
        productImage.src = product.img;
        productImage.alt = product.name;
        productImage.classList = 'card-img-top'
        productContainer.appendChild(productImage)
        const productBody = document.createElement('div')
        productBody.classList = 'card-body'
        const productTitle = document.createElement('h5')
        productTitle.classList = 'card-title'
        productTitle.innerText = product.name
        productBody.appendChild(productTitle)
        const productPrice = document.createElement('h6')
        productPrice.innerText = product.price + ' у. е.'
        productBody.appendChild(productPrice)
        const addToCart = document.createElement('button')
        addToCart.innerText = 'В корзину'
        addToCart.classList = 'btn btn-primary'
        addToCart.addEventListener('click', () => { add_to_cart(p_id) })
        const productLink = document.createElement('a')
        productLink.classList = 'btn btn-secondary'
        productLink.href = product.link
        productLink.innerText = 'Подробнее'

        productBody.appendChild(addToCart)
        productBody.appendChild(productLink)

        productContainer.appendChild(productBody)
        rowElement.appendChild(productContainer)
    }

    container.appendChild(rowElement)
}

function update_cart_display() {
    const cartContainer = document.getElementById("cart-container")
    cartContainer.innerHTML = ""

    for (const [p_id, amount] of Object.entries(CartContents)) {
        if (amount < 1) { continue }
        const productRow = document.createElement('div')
        productRow.classList = 'd-flex gap-2 justify-content-between align-items-baseline'
        const nameLabel = document.createElement('p')
        nameLabel.classList = 'text-xl'
        nameLabel.innerText = products[p_id].name
        productRow.appendChild(nameLabel)
        const amountLabel = document.createElement('p')
        amountLabel.innerText = `${amount}x${products[p_id].price}`
        productRow.appendChild(amountLabel)
        const removeButton = document.createElement('button')
        removeButton.innerText = 'Убрать'
        removeButton.addEventListener('click', () => { removeFromCart(p_id) })
        removeButton.classList = 'btn btn-danger btn-sm'
        productRow.appendChild(removeButton)
        cartContainer.appendChild(productRow)
    }

    if (Object.keys(CartContents).length != 0) {
        const totalRow = document.createElement('div')
        totalRow.classList = 'd-flex gap-2 justify-content-between'
        const totalLabel = document.createElement('p')
        totalLabel.classList = 'text-xl'
        totalLabel.innerText = 'Итого:'
        totalRow.appendChild(totalLabel)
        const totalAmount = document.createElement('p')
        totalAmount.innerText = `${calculateTotal().toFixed(2)} у. е.`
        totalRow.appendChild(totalAmount)
        cartContainer.appendChild(totalRow)
        const payButton = document.createElement('a')
        payButton.classList = 'btn btn-primary'
        payButton.innerText = 'Оплатить'
        payButton.addEventListener('click', () => { pay() })

        cartContainer.appendChild(payButton)
    } else {
        cartContainer.innerHTML = "Корзина пуста"
    }
}

const pay = () => {
    alert(`Успешно оплачено ${calculateTotal().toFixed(2)} у. е.`)
    CartContents = {}
    update_cart_display()
}

const calculateTotal = () => {
    var total = 0
    for (const [p_id, amount] of Object.entries(CartContents)) {
        total += amount * products[p_id].price
    }

    return total
}

function add_to_cart(p_id) {
    if (!(p_id in CartContents)) {
        CartContents[p_id] = 0
    }

    CartContents[p_id] += 1
    alert(products[p_id].name + " добавлен в корзину")
    update_cart_display()
}

const removeFromCart = (p_id) => {
    if (!(p_id in CartContents)) { return }
    if (CartContents[p_id] < 1) { return }
    CartContents[p_id] -= 1
    update_cart_display()
}

function build_checkbox_filter(container, dict, name) {
    for (const key in dict) {
        const checkboxContainer = document.createElement('div')
        checkboxContainer.classList = 'form-check'
        const checkbox = document.createElement('input')
        checkbox.classList = `form-check-input ${name}`
        checkbox.type = 'checkbox'
        checkbox.value = key
        checkbox.id = `${name}-${key}`
        checkbox.checked = true
        checkbox.addEventListener('change', _event => { updateFilters() })
        const label = document.createElement('label')
        label.classList = 'form-check-label'
        label.for = `${name}-${key}`
        label.innerText = dict[key]

        checkboxContainer.appendChild(checkbox)
        checkboxContainer.appendChild(label)

        container.appendChild(checkboxContainer)
    }
}

function updateFilters() {
    const roastTypeFilters = Array.from(document.getElementsByClassName('roast-type'))
    const roastDarknessFilters = Array.from(document.getElementsByClassName('roast-darkness'))

    const preserveRoastTypes = roastTypeFilters
        .filter(item => { return item.checked })
        .map(item => { return RoastTypes[item.value] })
    const preserveDarkness = roastDarknessFilters
        .filter(item => { return item.checked })
        .map(item => { return RoastDarkness[item.value] })

    const filteredProducts = products
        .filter(p => preserveRoastTypes.includes(p.roast_type))
        .filter(p => preserveDarkness.includes(p.roast_darkness))

    products_container.replaceChildren()
    build_products(products_container, filteredProducts)
}

const roastTypeContainer = document.getElementById('roast-type-container')
const roastDarknessContainer = document.getElementById('roast-darkness-container')

build_products(products_container, products)
build_checkbox_filter(roastTypeContainer, RoastTypes, 'roast-type')
build_checkbox_filter(roastDarknessContainer, RoastDarkness, 'roast-darkness')
update_cart_display()
