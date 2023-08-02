import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ProductCard = ({
  key,
  img,
  category,
  price,
  name,
  handleViewProduct,
}) => {
  return (
    <Card sx={{ width: 270, maxWidth: "100%", boxShadow: "lg" }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            className="object-top"
            src={img}
            srcSet={img}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body3">{category}</Typography>
        <Link
          fontWeight="xl"
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
        >
          {name}
        </Link>

        <Typography
          fontSize="xl"
          fontWeight="xl"
          sx={{ mt: 1 }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          Rs {price}
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button
          onClick={() => handleViewProduct({ img, name, category, price })}
          variant="solid"
          color="danger"
          size="lg"
        >
          View Product
        </Button>
      </CardOverflow>
    </Card>
  );
};

export default ProductCard;
