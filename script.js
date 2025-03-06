<script>
        document.querySelector('.shop-now').addEventListener('click', function() {
            window.location.href = '#products';
        });

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                alert('Item added to cart!');
            });
        });
    </script>git 