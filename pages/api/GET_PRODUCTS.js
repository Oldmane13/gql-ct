import { GraphQLClient, gql } from "graphql-request";
export const GET_PRODUCTS = gql`
  query {
    product(key: "4633881") {
      key
      masterData {
        hasStagedChanges
        staged {
          name(locale: "en")
          description(locale: "en")
          masterVariant {
            key
            sku
            availability {
              channels {
                results {
                  availability {
                    isOnStock
                    availableQuantity
                    restockableInDays
                  }
                }
              }
            }
            attributesRaw(
              includeNames: ["exactColour", "onSale", "colourFamily"]
            ) {
              value
            }
          }
        }
      }
    }
  }
`;
