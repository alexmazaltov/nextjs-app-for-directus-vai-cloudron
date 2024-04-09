import Head from 'next/head';

export default function BuyRecipes() {
  return (
    <div>
      <Head>
        <title>Buy Recipes</title>
      </Head>
      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      <stripe-pricing-table
        pricing-table-id="prctbl_1P3clKCwLygGnPyyHILwBPkN"
        publishable-key="pk_test_T7QdHZzKJogOOsffNMlYf5NJ"
      ></stripe-pricing-table>
    </div>
  );
}